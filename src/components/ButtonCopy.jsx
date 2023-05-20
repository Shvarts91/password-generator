import React from 'react'
import Button from '@mui/material/Button'

function ButtonCopy({ setCopySuccess, copyToClipboard, password }) {
  return (
    <div>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(password)
          setCopySuccess('Copied!')

          setTimeout(copyToClipboard, 2000)
        }}
        type="submit"
        variant="outlined"
      >
        Copy
      </Button>
    </div>
  )
}

export default ButtonCopy
