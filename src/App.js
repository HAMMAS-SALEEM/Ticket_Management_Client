import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { useState } from 'react';

const App = () => {
  const [signedIn, setSignedIn] = useState(JSON.parse(localStorage.getItem('user')) ? true : false);

  const handleAuth = () => setSignedIn(!signedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoutes signedIn={signedIn} handleAuth={handleAuth} >
            <Home />
          </ProtectedRoutes>
        } />
        <Route path="/login" element={
          <PublicRoutes signedIn={signedIn} component={Login} handleAuth={handleAuth}>
            <Login />
          </PublicRoutes>
        } />
        <Route path="/register" element={
          <PublicRoutes signedIn={signedIn} component={Register} handleAuth={handleAuth}>
            <Register />
          </PublicRoutes>
        }/>
      </Routes>
    </>
  );
}

export default App;
