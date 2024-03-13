import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import authService from '../services/auth-service';
import NewUserButton from '../components/NewUserButton';

const Login = ({handleAuth}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    const body = [ username, password ]
    const res = await authService.login(body);

    if(res.status === 200) {
      setError("")
      setError(false)
      handleAuth()
    } else if (res.includes("404")) {
      setError(true)
      setErrorMessage("Username is incorrect")
    } else if (res.includes("401")) {
      setError(true)
      setErrorMessage("Password is incorrect")
    }
  }
  return (
    <div className="p-10">
      <LoginForm 
        setUsername={setUsername}
        setPassword={setPassword}
        handleSignin={handleSignin}
      />
      <span className={error ? "bg-red-500 p-2 text-white rounded" : undefined}>{error ? errorMessage : ''}</span>
      <NewUserButton message={"Don't have an accout?"} value={"Register"} />
    </div>
  )
}

export default Login;
