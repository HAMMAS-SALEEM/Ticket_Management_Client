import React from 'react'
import Tickets from '../components/Tickets'
import authService from '../services/auth-service'
import TicketModal from '../components/TicketModal'
import SuccessBar from '../components/SuccessBar'
import { useDispatch, useSelector } from 'react-redux'
import { 
  handleTicketCreated, 
  handleTicketCreatedError, 
  handleTicketRemoved, 
  handleTicketRemovedError, 
  handleTicketUpdated, 
  handleTicketUpdatedError } from '../redux/slices/ticketStatusSlice';
import ErrorBar from '../components/ErrorBar'

const Home = ({handleAuth}) => {

  const dispatch = useDispatch();

  const ticketStatus = useSelector((store) => store.ticketStatus);

  const handleSignOut = async () => {
    authService.logout();
    handleAuth();
  }

  let messages = [
    { 
      ticketMessage: "Ticket Creation Successful!",
      handleTicket: () => dispatch(handleTicketCreated(false)),
      status: ticketStatus.ticketCreated
    },
    {
      ticketMessage: "Ticket Removal Successful!",
      handleTicket: () => dispatch(handleTicketRemoved(false)),
      status: ticketStatus.ticketRemoved
    },
    {
      ticketMessage: "Ticket Updation Successful!",
      handleTicket: () => dispatch(handleTicketUpdated(false)),
      status: ticketStatus.ticketUpdated
    }
  ]

  let errorMessages = [
    {
      ticketMessage: "Ticket Creation Failed!",
      handleTicket: () => dispatch(handleTicketCreatedError(false)),
      status: ticketStatus.ticketCreatedError,
    },
    {
      ticketMessage: "Ticket Removal Failed!",
      handleTicket: () => dispatch(handleTicketRemovedError(false)),
      status: ticketStatus.ticketRemovedError,
    },
    {
      ticketMessage: "Ticket Updation Failed!",
      handleTicket: () => dispatch(handleTicketUpdatedError(false)),
      status: ticketStatus.ticketUpdatedError,
    }
  ]

  return (
    <div>
      {
        messages.map((message, index) => (
          <SuccessBar
            key={index+message.ticketMessage}
            successStatus={message.status}
            successMessage={message.ticketMessage}
            handleSuccess={message.handleTicket} 
          />          
        ))
      }
      {
        errorMessages.map((message, index) => (
          <ErrorBar
            key={index+message.ticketMessage}
            errorStatus={message.status}
            errorMessage={message.ticketMessage}
            handleError={message.handleTicket} 
          />          
        ))
      }
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