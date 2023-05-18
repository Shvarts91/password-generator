import React from 'react'

function Number({ passwordLength, setPasswordLength }) {
  const onChangeNumber = (e) => {
    setPasswordLength(e.target.value)
  }
  return (
    <div>
      <label htmlFor="number">Enter length</label>
      <input
        value={passwordLength}
        onChange={onChangeNumber}
        id="number"
        type="number"
      />
    </div>
  )
}

export default Number
