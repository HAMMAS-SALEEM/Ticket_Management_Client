import React, { useState } from 'react'
import { categoryOptions, statusOptions } from './Options';
import { createTicket } from '../services/ticket-service';
import { addTicketStore } from '../redux/slices/ticketSlice';
import { useDispatch } from 'react-redux';
import { TEInput, TESelect } from 'tw-elements-react';

const TicketForm = ({setShowModal}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusValue, setStatusValue] = useState("To Do");
  const [categoryValue, setCategoryValue] = useState("1");
  const [error, setError] = useState(false)

  const dispatch = useDispatch();

  const handleTicketCreation = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('user')).id
    const body = {
        title,
        description,
        ticketStatus: statusValue,
        categoryId: categoryValue,
        userId
    }
    const res = await createTicket(body);
    if(res.status === 200) {
      const newUser = res.data.ticket
      dispatch(addTicketStore(newUser))
      setShowModal(false)
      setTitle("");
      setDescription("")
      setStatusValue("To Do")
      setError(false);
    } else {
      setError(true);
    }
  }

  const onStatusChange = (value) => setStatusValue(value.value);

  const onCategoryChange = (value) => setCategoryValue(value.value);

  return (
    <form onSubmit={handleTicketCreation}>
      <TEInput
        type="text"
        label="Title"
        className="mb-4"
        onChange={(e) => setTitle(e.target.value)}
        required
        value={title}
        >
      </TEInput>
            <TEInput
              type="text"
              label="Description"
              className="mb-4"
              onChange={(e) => setDescription(e.target.value)}
              required
              value={description}
              >
            </TEInput>
            <TESelect data={statusOptions} onValueChange={onStatusChange} value={statusValue} />
            <TESelect data={categoryOptions} onValueChange={onCategoryChange} className="mt-4" />
            <input
             type="submit" 
             onClick={handleTicketCreation} 
             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 mt-3 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" />
             <span className={error ? "bg-red-500 p-2 text-white rounded" : undefined}>{error ? "Ticket Creation Failed!" : ''}</span>
            </form>
  )
}

export default TicketForm;
