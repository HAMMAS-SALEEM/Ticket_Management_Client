import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import authService from '../services/auth-service'
import { NavLink } from 'react-router-dom';

const Register = ({handleAuth}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault();
    const body = [ username, email, password ]
    const res = await authService.register(body)
    if(res.status === 200) {
      await authService.login([body[0], body[2]])
      handleAuth()
    }
  }
  return (
    <div className="p-10">
      <RegisterForm 
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignup={handleSignup}
      />
      <NavLink to='/login'>Already have account?</NavLink>
    </div>
  )
}

export default Register;
