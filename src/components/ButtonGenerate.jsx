import Button from '@mui/material/Button'

function ButtonGenerate({
  passwordLength,
  checkboxLetters,
  checkboxNumbers,
  checkboxSymbols,
}) {
  return (
    <div className="buttonGenerate">
      <Button
        type="submit"
        disabled={
          !passwordLength ||
          (!checkboxLetters && !checkboxNumbers && !checkboxSymbols)
        }
        variant="contained"
      >
        Generate
      </Button>
    </div>
  )
}

export default ButtonGenerate
