import Button from '@mui/material/Button'

function ButtonCopy({ setCopySuccess, copyToClipboard, password }) {
  const onClickHandle = () => {
    navigator.clipboard.writeText(password)
    setCopySuccess('Copied!')
    setTimeout(copyToClipboard, 2000)
  }
  return (
    <div>
      <Button onClick={onClickHandle} type="button" variant="outlined">
        Copy
      </Button>
    </div>
  )
}

export default ButtonCopy
