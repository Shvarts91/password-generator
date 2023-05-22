import { useState } from 'react'
import Checkbox from './Checkbox'
import Number from './Number'

import ButtonGenerate from './ButtonGenerate'
import ButtonCopy from './ButtonCopy'

function BodyForm() {
  const [passwordLength, setPasswordLength] = useState(0)
  const [checkboxLetters, setCheckboxLetters] = useState(false)
  const [checkboxNumbers, setCheckboxNumbers] = useState(false)
  const [checkboxSymbols, setcheckboxSymbols] = useState(false)
  const [password, setPassword] = useState('')
  const [copySuccess, setCopySuccess] = useState('')

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

      resultPassword += symbolsForPassword[randomNumber]
    }
    setPassword(resultPassword)
  }

  function copyToClipboard() {
    setCopySuccess('')
  }

  return (
    <div>
      <form onSubmit={getPassword}>
        <h1>Password Generator</h1>
        <Number
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <div className="blockCheckbox">
          <div>
            <div className="checkBox">
              <Checkbox
                valueBox={checkboxLetters}
                nameBox={'Letters'}
                setValue={setCheckboxLetters}
              />
            </div>
            <div className="checkBox">
              <Checkbox
                valueBox={checkboxNumbers}
                nameBox={'Numbers'}
                setValue={setCheckboxNumbers}
              />
            </div>
            <div>
              <Checkbox
                valueBox={checkboxSymbols}
                nameBox={'Symbols'}
                setValue={setcheckboxSymbols}
              />
            </div>
          </div>
        </div>

        <ButtonGenerate
          passwordLength={passwordLength}
          checkboxLetters={checkboxLetters}
          checkboxNumbers={checkboxNumbers}
          checkboxSymbols={checkboxSymbols}
        />
      </form>
      <div>
        <h3>Your password:</h3>
        <div className="blockForPassword">
          {!!password.length && password}
          {password ? (
            <ButtonCopy
              copyToClipboard={copyToClipboard}
              setCopySuccess={setCopySuccess}
              password={password}
            />
          ) : (
            ''
          )}
        </div>

        {copySuccess}
      </div>
    </div>
  )
}

export default BodyForm
