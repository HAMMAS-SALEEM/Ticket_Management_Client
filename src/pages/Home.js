import React, { useState } from 'react'
import Tickets from '../components/Tickets'
import authService from '../services/auth-service'
import TicketModal from '../components/TicketModal'
import SuccessBar from '../components/SuccessBar'

const Home = ({handleAuth}) => {
  const [ticketCreationSuccess, setTicketCreationSuccess] = useState("false");
  const [ticketRemovalSuccess, setTicketRemovalSuccess] = useState("false");
  const [ticketUpdationSuccess, setTicketUpdationSuccess] = useState("false");

  const handleTicketCreationSuccess = () => setTicketCreationSuccess(!ticketCreationSuccess);
  const handleTicketRemovalSuccess = () => setTicketRemovalSuccess(!ticketRemovalSuccess);
  const handleTicketUpdationSuccess = () => setTicketUpdationSuccess(!ticketUpdationSuccess);

  const handleSignOut = async () => {
    authService.logout();
    handleAuth();
  }

  const ticketCreationSuccessMessage = "Ticket Creation Successful!"
  const ticketRemovalSuccessMessage = "Ticket Removal Successful!"
  const ticketUpdationSuccessMessage = "Ticket Updation Successful!"

  return (
    <div>
      <SuccessBar
        successStatus={ticketCreationSuccess}
        successMessage={ticketCreationSuccessMessage}
        handleSuccess={handleTicketCreationSuccess} 
      />
      <SuccessBar
        successStatus={ticketRemovalSuccess}
        successMessage={ticketRemovalSuccessMessage}
        handleSuccess={handleTicketRemovalSuccess} 
      />      
      <SuccessBar
        successStatus={ticketUpdationSuccess}
        successMessage={ticketUpdationSuccessMessage}
        handleSuccess={handleTicketUpdationSuccess} 
      />
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
