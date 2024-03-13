import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTickets } from "../../services/ticket-service";

export const fetchTickets = createAsyncThunk("Fetch/Tickets", async () => {
  const res = await getTickets()
  return res;
})

const TicketSlice = createSlice({
  name: "Fetch/Tickets",
  initialState: {
    tickets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    removeTicketFromStore(state, action) {
        const updatedTickets = [...state.tickets.tickets.filter(ticket => ticket.id.toString() !== action.payload.toString())];
        return {
          ...state,
          tickets: {tickets: updatedTickets},
          status: state.status,
          error: state.error,
        };
    },
    addTicketStore(state, action) {
      const updatedTickets = [...state.tickets.tickets, action.payload]
      return {
        ...state,
        tickets: {tickets: updatedTickets},
        status: state.status,
        error: state.error
      }
    },
    updateTicketStore(state, action) {
      console.log({...action.payload})
      const filterdTickets = [...state.tickets.tickets.filter(ticket => ticket.id.toString() !== action.payload.toString())];
      filterdTickets.push(action.payload)

      return {
        ...state,
        tickets: {tickets: filterdTickets},
        status: state.status,
        error: state.error
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
    })
    .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'successful'
        state.tickets = action.payload
    })
    .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload.message
    })
  }
})

export default TicketSlice.reducer;
export const {removeTicketFromStore, addTicketStore, updateTicketStore} = TicketSlice.actions