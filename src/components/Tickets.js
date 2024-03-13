import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchTickets } from '../redux/slices/ticketSlice'
import SingleTicket from './SingleTicket'
import { categoryOptions, statusOptions } from './Options'
import { TESelect } from 'tw-elements-react'

const Tickets = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(0);
  const [errorUpdate, setErrorUpdate] = useState(false);
  const [errorRemove, setErrorRemove] = useState(false);

  const dispatch = useDispatch();
  const tickets = useSelector((store)=>store.tickets.tickets)
  const handleTickets = () => {
    dispatch(fetchTickets())
  }

  const removeFilters = () => {
    setStatusFilter("");
    setCategoryFilter(0);
  }

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <div className="flex flex-col justify-center items-center">
      <span>Filter Tickets</span>
      <div className="flex mb-3">
        <TESelect data={statusOptions} onValueChange={(value) => setStatusFilter(value.value)} className="m-2" />
        <TESelect data={categoryOptions} onValueChange={(value) => setCategoryFilter(value.value)} className="m-2" />
      </div>
      <span className={errorUpdate ? "bg-red-500 p-2 text-white rounded" : undefined}>{errorUpdate ? "Ticket Updation Failed!" : ''}</span>
      <span className={errorRemove ? "bg-red-500 p-2 text-white rounded" : undefined}>{errorRemove ? "Ticket Removing Failed!" : ''}</span>
      <table className="">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
        {  tickets.tickets ?
            tickets.tickets
            .filter((ticket => {
              if(statusFilter === "") {
                return ticket
              }
              return ticket.ticketStatus.includes(statusFilter);
            }))
            .filter((ticket => {
              if(categoryFilter === 0) {
                return ticket
              }
              return ticket.categoryId === categoryFilter;
            }))
            .map((ticket, index)=> (
                <tr key={index+ticket}>
                  <SingleTicket 
                  id={ticket.id} 
                  title={ticket.title} 
                  description={ticket.description} 
                  ticketStatus={ticket.ticketStatus} 
                  setErrorUpdate={setErrorUpdate} 
                  setErrorRemove={setErrorRemove} />
                </tr>
            )) : <tr></tr>
        }
        </tbody>
      </table>
      <div>
        <button onClick={handleTickets} className=" m-1 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 mt-5 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" >Refresh Tickets</button>
        {
          (statusFilter !== "" || categoryFilter !== 0) ? 
          <button onClick={removeFilters} className="m-1 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 mt-5 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" >Remove Filters</button>
          : ''
        }
      </div>
    </div>
  )
}

export default Tickets;
