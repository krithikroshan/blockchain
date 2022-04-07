import { SET_TOTAL_NO_OF_TICKETS, SET_SELECTED_TICKETS } from "../constants/ticketConstants"

const setTotalNoOfTickets = (totalNoOfTickets) => {
    return {
        type: SET_TOTAL_NO_OF_TICKETS,
        payload: totalNoOfTickets
    }
}

const setSelectedTickets = (ticketsObj) => {
    return {
        type: SET_SELECTED_TICKETS,
        payload: ticketsObj
    }
}

const ticketActions = {
    setTotalNoOfTickets,
    setSelectedTickets
}

export default ticketActions;