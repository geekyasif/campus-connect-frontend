import React from 'react'

function TextInput({placeholderText, typeText, value, labelText, onChange, name}) {
  return (
    <div className='w-full m-2'>
        <label className='w-full'>{labelText}</label>
        {
          typeText === "date" ? <br/> : <></>
        }
        <input
            className={ typeText ===  "date" ? "bg-white p-2 my-2 w-full border rounded" : "border p-2 w-full my-2 rounded"}
            type={typeText} 
            placeholder={placeholderText}
            value={value}
            name={name}
            onChange={onChange}
        />

    </div>
  )
}

export default TextInput