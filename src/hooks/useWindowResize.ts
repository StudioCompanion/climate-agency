import { useState, useEffect, useRef, useCallback } from 'react'

export interface DimesionsReadOnly {
  readonly width: number
  readonly height: number
}

/**
 *
 * @param function cb(bounds: DimesionsReadOnly) => void
 * called on resize with DimesionsReadOnly object as first argument
 * @returns DimesionsReadOnly
 */
const useWindowResize = (
  cb?: (bounds: DimesionsReadOnly) => void
): DimesionsReadOnly => {
  const [bounds, setBounds] = useState<DimesionsReadOnly>({
    width: 0,
    height: 0,
  })

  // hold old dimensions in ref to avoid having to remake the callback below
  const prevDimesions = useRef(bounds)

  const handleResize = useCallback(() => {
    const { innerHeight: height, innerWidth: width } = window
    const newDimensions = {
      height,
      width,
    }
    Object.freeze(newDimensions)
    // if dimensions are not equal, update and re-render
    if (
      !isObjectEqual(prevDimesions.current, newDimensions, ['width', 'height'])
    ) {
      setBounds(newDimensions)

      if (cb) {
        cb(newDimensions)
      }
    }
  }, [cb])

  useEffect(() => {
    // initial calc
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return bounds
}

const isObjectEqual = <TObject>(
  oldObj: TObject,
  newObj: TObject,
  keys: Array<keyof TObject>
) => keys.every((key) => oldObj[key] === newObj[key])

export { useWindowResize }
