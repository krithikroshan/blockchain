import {
  SET_TOTAL_NO_OF_TICKETS,
  SET_SELECTED_TICKETS,
} from "../constants/ticketConstants";

const currentTickets = (state = {}, action) => {
  switch (action.type) {
    case SET_TOTAL_NO_OF_TICKETS:
      return {
        ...state,
        totalNoOfTickets: action.payload,
      };

    case SET_SELECTED_TICKETS:
      
      var tickets = action.payload;
      var totalNoOfTickets = 0;
      var local_ticket_id = 0;
      var seperated_tickets = {}
      for (const ticketKey in tickets) {
        var ticketKeyQuantity = tickets[ticketKey]['quantity']
        totalNoOfTickets += ticketKeyQuantity;
        
        for (const i in [...Array(ticketKeyQuantity).keys()]) {
          seperated_tickets[local_ticket_id] = {
            id: tickets[ticketKey]['ticket']['id'],
            addons: {},
            ticket: tickets[ticketKey]['ticket'],
          }
          local_ticket_id += 1
        }
      }

      return {
        ...state,
        seperated_tickets: seperated_tickets,
        totalNoOfTickets: totalNoOfTickets,
      };

    default:
      return state;
  }
};

export default currentTickets;
