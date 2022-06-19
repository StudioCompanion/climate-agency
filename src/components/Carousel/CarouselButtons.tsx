import React from 'react'

import { styled } from 'styles/stitches.config'

interface DotProps {
  enabled: boolean
  selected: boolean
  onClick: () => void
}

export const Dot = ({ enabled, onClick, selected }: DotProps) => (
  <ButtonWrap onClick={onClick} disabled={!enabled} selected={selected}>
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3"
        cy="3"
        r="3"
        fill="#858096"
        fillOpacity={selected ? '1' : '0.4'}
      />
    </svg>
  </ButtonWrap>
)

const ButtonWrap = styled('button', {
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  touchAction: 'manipulation',
  width: '10px',
  height: '10px',
  transform: 'translate3d(0%, 0px, 0px) !important',
})
