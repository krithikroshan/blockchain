import currentUser from './userReducer'
import currentTickets from './ticketReducer'
import currentAddons from './addonReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentUser: currentUser,
    currentTickets: currentTickets,
    currentAddons: currentAddons
})

export default rootReducer