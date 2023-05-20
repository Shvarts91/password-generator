import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckboxComponents({ valueBox, nameBox, setValue }) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => {
                valueBox === false ? setValue(true) : setValue(false)
              }}
              value={valueBox}
            />
          }
          label={`Use ${nameBox}`}
        />
      </FormGroup>
    </div>
  )
}

export default CheckboxComponents
