import React from 'react'
import { NavLink } from 'react-router-dom'
import { TERipple } from 'tw-elements-react'

const NewUserButton = ({message, value}) => {
  return (
    <div className="flex items-center justify-between pb-6">
      <p className="mb-0 mr-2">{message}</p>
      <TERipple rippleColor="light">
        <NavLink to='/register'
          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          {value}
        </NavLink>
      </TERipple>
    </div>
  )
};

export default NewUserButton;
