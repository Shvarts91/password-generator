import React, { useState } from 'react'
import Checkbox from './Checkbox'
import Number from './Number'

function BodyForm() {
  const [passwordLength, setPasswordLength] = useState(0)
  const [checkboxLetters, setCheckboxLetters] = useState(false)
  const [checkboxNumbers, setCheckboxNumbers] = useState(false)
  const [checkboxSymbols, setcheckboxSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const getPassword = (e) => {
    e.preventDefault()
    let symbolsForPassword = ''
    if (checkboxLetters) {
      symbolsForPassword += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (checkboxNumbers) {
      symbolsForPassword += '0123456789'
    }
    if (checkboxSymbols) {
      symbolsForPassword += '!@#$%^&*()|/?'
    }
    let resultPassword = ''
    for (let i = 1; i <= +passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * symbolsForPassword.length)
      // setPassword(symbolsForPassword.substring(randomNumber, randomNumber + 1))

      resultPassword += symbolsForPassword[randomNumber]
    }
    setPassword(resultPassword)
  }

  return (
    <div>
      <form onSubmit={getPassword}>
        <h1>Password Generator</h1>
        <Number
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <Checkbox
          valueBox={checkboxLetters}
          nameBox={'Letters'}
          setValue={setCheckboxLetters}
        />
        <Checkbox
          valueBox={checkboxNumbers}
          nameBox={'Numbers'}
          setValue={setCheckboxNumbers}
        />
        <Checkbox
          valueBox={checkboxSymbols}
          nameBox={'Symbols'}
          setValue={setcheckboxSymbols}
        />
        <button disabled={passwordLength === 0 || !passwordLength}>
          Generate
        </button>
      </form>
      <div>
        <h3>Your password:</h3>
        {password ? password : ''}
      </div>
    </div>
  )
}

export default BodyForm
