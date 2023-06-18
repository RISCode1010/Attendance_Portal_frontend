import React from 'react'
import "../Styles/WhiteSpinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="loader"></div>
    </div>
  )
}

export default Spinner
