import React, { useState } from 'react'
import { removeTicket, updateTicket } from '../services/ticket-service'
import { useDispatch } from 'react-redux'
import { statusOptions } from './Options';
import { fetchTickets, removeTicketFromStore } from '../redux/slices/ticketSlice'
import { TESelect } from 'tw-elements-react';

const SingleTicket = ({id, title, description, ticketStatus, setErrorUpdate, setErrorRemove}) => {
  const [popup, setPopup] = useState(false);
  const [updatedOption, setUpdatedOption] = useState("");

  const dispatch = useDispatch();
  const handleRemoveTicket = async () => {
    const res = await removeTicket(id)
    if(res.status === 200) {
        dispatch(removeTicketFromStore(id))
        setErrorRemove(false);
    } else {
      setErrorRemove(true)
    }
  }

  const handlePopup = () => setPopup(!popup);

  const handleUpdateTicket = async () => {
    const res = await updateTicket(id, updatedOption)
    if (res.status === 200) {
      dispatch(fetchTickets())
      handlePopup();
      setErrorUpdate(false);
    } else {
      setErrorUpdate(true);
    }
  };

  const handleSetUpdatedOption = (value) => setUpdatedOption(value.value);

  return (
      <>
        <td>{title}</td>
        <td>{description}</td>
        <td>{ticketStatus}</td>
        <td>
          <button type="button" onClick={handleRemoveTicket} className="bg-[#a155b9] p-2 mr-2 border-radius-1 text-white rounded">Remove</button>
          <button type="button" onClick={handlePopup} className="bg-[#5765a3] p-2 mr-2 border-radius-1 text-white rounded">Update Status</button>
          {
              popup ? <>
              <TESelect data={statusOptions} onValueChange={handleSetUpdatedOption} className="mt-2" />
              <button type="button" onClick={handleUpdateTicket} className="bg-orange-600 rounded p-2 m-2 border-radius-1 text-white">Update Status</button>
              </> : ''
          }
        </td>
      </>
  )
}

export default SingleTicket;