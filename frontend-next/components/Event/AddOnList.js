// ADDONS: STEP 2 -- List of addons
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styles from "../../styles/Event.module.css";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";
import TicketAddOns from "./TicketAddOns";
import { useSelector } from "react-redux";

function AddOnList({ event, addons, onCheckout, commonAddons }) {
  // const [addons, setAddons] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentTickets = useSelector((state) => state.currentTickets);

  // useEffect(() => {
  //   axios
  //     .get(`${API_BASE_URL}/events/${event.id}/add_ons`)
  //     .then((res) => {
  //       setAddons(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    if (addons) {
      setLoading(false);
    }
  }, [addons]);

  return (
    <>
      {!loading ? (
        <>
          <div className={styles.modaltickets}>
            {!commonAddons ? (
              Object.keys(currentTickets.seperated_tickets).map(
                (seperatedTicketId, ticketIndex) => {
                  return (
                    <div key={seperatedTicketId} style={{ padding: "0 80px" }}>
                      <TicketAddOns
                        addons={addons}
                        ticket={currentTickets.seperated_tickets[seperatedTicketId]["ticket"]}
                        seperatedTicketId={seperatedTicketId}
                        number={ticketIndex + 1}
                      />
                      {ticketIndex < currentTickets.totalNoOfTickets - 1 ? (
                        <hr />
                      ) : null}
                    </div>
                  );
                }
              )
            ) : (
              <div style={{ padding: "0 80px" }}>
                <TicketAddOns addons={addons} commonAddons={commonAddons} />
                <hr />
              </div>
            )}
          </div>
          <div className={styles.modalcheckout}>
            <Button
              type="primary"
              onClick={onCheckout}
              style={{ float: "right", marginTop: 16 }}
            >
              Continue
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddOnList;
