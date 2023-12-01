import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px]  mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px]  bg-transparent font-epilogue  text-[14px]  rounded-[10px] sm:min-w-[300px] bg-slate-100 placeholder:text-black"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] bg-slate-100 px-[15px] outline-none border-[1px]  bg-transparent font-epilogue  text-[14px]  rounded-[10px] sm:min-w-[300px] placeholder:text-black"
        />
      )}
    </label>
  )
}

export default FormField