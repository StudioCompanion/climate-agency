import { styled } from 'styles/stitches.config'

export const ButtonTest = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('aha you found me')
  }

  return <Button type="button" onClick={handleClick}>{`I am test!`}</Button>
}

const Button = styled('button', {
  border: '2px solid blue',
  backgroundColor: 'transparent',
})
