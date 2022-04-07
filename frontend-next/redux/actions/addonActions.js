import {
  SET_PER_TICKET_AND_CUMULATIVE_ADDONS,
  SET_FINAL_PER_TICKET_ADDONS,
  CLEAR_ADDONS
} from "../constants/addonConstants";

const setPerTicketAddons = (addonObj) => {
  return {
    type: SET_PER_TICKET_AND_CUMULATIVE_ADDONS,
    payload: addonObj,
  };
};

const setFinalPerTicketAddons = (totalNoOfTickets) => {
  return {
    type: SET_FINAL_PER_TICKET_ADDONS,
    payload: totalNoOfTickets
  };
};

const clearAddons = () => {
  return {
    type: CLEAR_ADDONS,
  };
};

const addonActions = {
  setPerTicketAddons, clearAddons, setFinalPerTicketAddons
};

export default addonActions;
