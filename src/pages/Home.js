import React from 'react'
import Tickets from '../components/Tickets'
import authService from '../services/auth-service'
import TicketModal from '../components/TicketModal'

const Home = ({handleAuth}) => {

  const handleSignOut = async () => {
    authService.logout();
    handleAuth();
  }
  return (
    <div>
      <div className="flex justify-between">
        <TicketModal />
        <button 
          onClick={handleSignOut}
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 m-5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Logout
        </button>
      </div>
      <Tickets />
    </div>
  )
}

export default Home;
