import { configConsumerProps } from "antd/lib/config-provider";
import {
  SET_PER_TICKET_AND_CUMULATIVE_ADDONS,
  SET_FINAL_PER_TICKET_ADDONS,
  CLEAR_ADDONS,
} from "../constants/addonConstants";

const currentAddons = (state = {}, action) => {
  switch (action.type) {
    case SET_PER_TICKET_AND_CUMULATIVE_ADDONS:
      var ticketId = action.payload.ticketId;
      var seperatedTicketId = action.payload.seperatedTicketId;
      var totalNoOfTickets = action.payload.totalNoOfTickets;
      var addonId = action.payload.addon.id;

      //  The part below is to update the per ticket addons
      var tempState = { ...state };
      if (!tempState.perTicketAddons) {
        tempState.perTicketAddons = {};
      }

      if (!tempState.perTicketAddons[seperatedTicketId]) {
        tempState.perTicketAddons[seperatedTicketId] = {};
      }

      if (tempState.perTicketAddons[seperatedTicketId][addonId]) {
        if (action.payload.quantity == 0) {
          delete tempState.perTicketAddons[seperatedTicketId][addonId];
        } else {
          if (seperatedTicketId === "all") {
            tempState.perTicketAddons[seperatedTicketId][addonId].quantity =
              action.payload.quantity * totalNoOfTickets;
          } else {
            tempState.perTicketAddons[seperatedTicketId][addonId].quantity =
              action.payload.quantity;
          }
        }
      } else {
        var localPayload = { ...action.payload };
        delete localPayload.ticketId;
        delete localPayload.seperatedTicketId;
        delete localPayload.totalNoOfTickets;
        if (ticketId === "all") {
          localPayload.quantity = localPayload.quantity * totalNoOfTickets;
        } else {
          tempState.perTicketAddons[seperatedTicketId]["ticket_id"] = ticketId;
        }
        tempState.perTicketAddons[seperatedTicketId][addonId] = localPayload;
      }

      tempState.cumulativeAddons = {};
      // The part below is to update the cumulative addons
      var tempCumulativeState = {};
      // Making a deep copy of tempState
      var tempStateV2 = JSON.parse(JSON.stringify(tempState));
      // Looping through to calculate cumulative addons
      Object.keys(tempStateV2.perTicketAddons).map(function (
        ticketKey,
        ticketIndex
      ) {
        for (const addonKey in tempStateV2.perTicketAddons[ticketKey]) {
          if (addonKey === "ticket_id") {
            continue;
          }
          if (tempCumulativeState[addonKey]) {
            tempCumulativeState[addonKey].quantity +=
              tempStateV2.perTicketAddons[ticketKey][addonKey].quantity;
          } else {
            tempCumulativeState[addonKey] =
              tempStateV2.perTicketAddons[ticketKey][addonKey];
          }
        }
      });

      //  Now we update the state with the newly calculated tempState and the tempCumulativeState
      return {
        ...tempState,
        cumulativeAddons: tempCumulativeState,
      };

    case SET_FINAL_PER_TICKET_ADDONS:
      var totalNoOfTickets = parseInt(action.payload);
      var tempState = { ...state };
      if(Object.keys(tempState).length > 0) {
        tempState.finalPerTicketAddons = JSON.parse(
          JSON.stringify(tempState.perTicketAddons)
        );
        for (const addonKey in tempState.perTicketAddons["all"]) {
          for (const ticketKey in [...Array(totalNoOfTickets).keys()]) {
            if (tempState.finalPerTicketAddons[ticketKey]? (addonKey in tempState.finalPerTicketAddons[ticketKey]) : false) {
              tempState.finalPerTicketAddons[ticketKey][addonKey]["quantity"] +=
                parseInt(
                  tempState.finalPerTicketAddons["all"][addonKey]["quantity"]
                ) / totalNoOfTickets;
            } else {
              tempState.finalPerTicketAddons[ticketKey][addonKey] = JSON.parse(
                JSON.stringify(tempState.finalPerTicketAddons["all"][addonKey])
              );
              tempState.finalPerTicketAddons[ticketKey][addonKey]["quantity"] /=
                totalNoOfTickets;
            }
          }
        }
        delete tempState.finalPerTicketAddons["all"];
      }
      return tempState;

    case CLEAR_ADDONS:
      return {};

    default:
      return state;
  }
};

export default currentAddons;
