import React from 'react'

function TextArea({placeholderText, typeText, labelText, name, value, onChange}) {
  return (
    <div className='w-full m-2'>
      <label className='w-full'>{labelText}</label>
        <textarea className="border p-4 w-full my-2" type={typeText} placeholder={placeholderText} name={name} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextArea