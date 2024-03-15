import { createSlice } from "@reduxjs/toolkit";


const TicketStatusSlice = createSlice({
    name: "TicketStatusSlice",
    initialState: {
        ticketCreated: false,
        ticketUpdated: false,
        ticketRemoved: false,
        ticketCreatedError: false,
        ticketRemovedError: false,
        ticketUpdatedError: false,
    },

    reducers: {
        handleTicketCreated(state, action) {
            state.ticketCreated = action.payload
        },
        handleTicketRemoved(state, action) {
            state.ticketRemoved = action.payload
        },
        handleTicketUpdated(state, action) {
            state.ticketUpdated = action.payload
        },
        handleTicketCreatedError(state, action) {
            state.ticketCreatedError = action.payload
        },
        handleTicketRemovedError(state, action) {
            state.ticketRemovedError = action.payload
        },
        handleTicketUpdatedError(state, action) {
            state.ticketUpdatedError = action.payload
        }
    }
})

export const { 
    handleTicketCreated, 
    handleTicketRemoved, 
    handleTicketUpdated,
    handleTicketCreatedError,
    handleTicketRemovedError,
    handleTicketUpdatedError 
} = TicketStatusSlice.actions;
export default TicketStatusSlice.reducer;