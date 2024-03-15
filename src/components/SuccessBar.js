import React from 'react'

const SuccessBar = ({ successStatus, successMessage, handleSuccess}) => {
  return (
    <div className={successStatus ? "bg-green-500 p-2 m-5 text-white rounded flex items-center justify-between" : "hidden"}>
    {
      successStatus ? 
      <>
        <p className="mx-2">{successMessage}</p>
        <button type="button" onClick={handleSuccess} className="bg-slate-900/54 px-2 py-1 rounded font-bold">X</button>
      </> : ''
    }
  </div>
  )
}

export default SuccessBar;