import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";

const LoginForm = ({setUsername, setPassword, handleSignin}) => {
  return (
      <form onSubmit={handleSignin}>
        <p className="mb-4">Please login to your account</p>
        <TEInput
          type="text"
          label="Username"
          className="mb-4"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></TEInput>

        <TEInput
          type="password"
          label="Password"
          className="mb-4"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></TEInput>

        <div className="mb-12 pb-1 pt-1 text-center">
          <TERipple rippleColor="light" className="w-full">
            <button
              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              Log in
            </button>
          </TERipple>
          </div>
      </form>
  )
}

export default LoginForm;
