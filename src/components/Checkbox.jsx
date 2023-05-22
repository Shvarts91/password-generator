import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckboxComponent({ valueBox, nameBox, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.checked)
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} value={valueBox} />}
        label={`Use ${nameBox}`}
      />
    </FormGroup>
  )
}

export default CheckboxComponent
