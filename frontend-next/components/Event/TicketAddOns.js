// ADDON: Step 3 - each selected ticket - list of each selected tickets (one ticket)
import React, { useState, useEffect } from "react";
import styles from "../../styles/Event.module.css";
import AddOnDetail from "./AddOnDetail";

function TicketAddOns({
  ticket,
  number,
  addons,
  commonAddons,
  seperatedTicketId
}) {

  //   const [selAddons, setSelAddons] = useState(addon.options[0].name);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (tickets) {
      setLoading(false);
    }
  }, [tickets]);

  const toggleHidden = () => {
    var x = hidden;
    setHidden(!x);
  };

  return (
    <div>
      {!loading ? (
        <>
          <div>
            <span
              style={{ float: "right", marginTop: 10 }}
              onClick={() => toggleHidden()}
            >
              {hidden ? "View Add-Ons" : "Hide Add-Ons"}
            </span>
            <span className={styles.checkouttitle}>
              {!commonAddons ? `Ticket ${number} · ${ticket.name}` : "Common Addons"}
            </span>
            {!hidden && addons?
              addons.map((addon) => (
                // ADDON: Step 4 -- for each add on of a ticket
                <AddOnDetail
                  addon={addon}
                  ticket={ticket}
                  commonAddons={commonAddons}
                  seperatedTicketId={seperatedTicketId}
                />
              )) : <></>}
          </div>
          <span className={styles.ticketend}>
            {/* Sales end on {dayjs(addon.sale_end).format("D MMM YYYY")} */}
          </span>
        </>
      ) : null}
    </div>
  );
}

export default TicketAddOns;
