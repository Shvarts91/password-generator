import React from 'react'

function Checkbox({ valueBox, nameBox, setValue }) {
  return (
    <div>
      <label htmlFor="checkbox">{`Use ${nameBox}`}</label>
      <input
        onChange={() => {
          valueBox === false ? setValue(true) : setValue(false)
        }}
        value={valueBox}
        id="checkbox"
        type="checkbox"
      />
    </div>
  )
}

export default Checkbox
