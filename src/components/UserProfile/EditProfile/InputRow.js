import React from 'react'

function InputRow(props) {
  return (
    <div className="flex flex-col md:flex-row">
        {props.children}
    </div>
  )
}

export default InputRow