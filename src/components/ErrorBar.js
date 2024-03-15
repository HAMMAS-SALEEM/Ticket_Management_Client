import React from 'react'

const ErrorBar = ({ errorStatus, errorMessage, handleError}) => {
  return (
    <div className={errorStatus ? "bg-red-500 p-2 m-5 text-white rounded flex items-center justify-between" : "hidden"}>
    {
      errorStatus ? 
      <>
        <p className="mx-2">{errorMessage}</p>
        <button type="button" onClick={handleError} className="bg-slate-900/54 px-2 py-1 rounded font-bold">X</button>
      </> : ''
    }
  </div>
  )
}

export default ErrorBar;
