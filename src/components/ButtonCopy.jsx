import Button from '@mui/material/Button'
import { useState } from 'react'

function ButtonCopy({ password }) {
  const [copySuccess, setCopySuccess] = useState('')

  function copyToClipboard() {
    setCopySuccess('')
  }

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
      <div className="textCopied">{copySuccess}</div>
    </div>
  )
}

export default ButtonCopy
