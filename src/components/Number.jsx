import React from 'react'
// import * as React from 'react'
import TextField from '@mui/material/TextField'

function Number({ passwordLength, setPasswordLength }) {
  const onChangeNumber = (e) => {
    setPasswordLength(e.target.value)
  }
  return (
    <div>
      <TextField
        min={0}
        onChange={onChangeNumber}
        value={passwordLength}
        id="number"
        label="Enter length"
        variant="standard"
      />
    </div>
  )
}

export default Number
