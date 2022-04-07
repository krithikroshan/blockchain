import React, { useState, useEffect } from "react";
import { Row, Col, Button, Empty } from "antd";
import styles from "../../styles/Event.module.css";
import TicketDetail from "./TicketDetail";
import dayjs from "dayjs";

function TicketList({ event, tickets, onSelect, onCheckout, selected }) {
  var start_date = dayjs(event.start_date).format("ddd, D MMM, YYYY");
  var end_date = dayjs(event.end_date).format("ddd, D MMM, YYYY");
  var start_time = event.start_time.substring(0, event.start_time.length - 3);
  var end_time = event.end_time.substring(0, event.end_time.length - 3);

  return (
    <>
      <div className={styles.modaltickets}>
        {tickets.map((ticket, i) => {
          if (i < tickets.length - 1) {
            return (
              <div key={ticket.id} style={{ padding: "0 80px" }}>
                <TicketDetail ticket={ticket} onSelect={onSelect} />
                <hr />
              </div>
            );
          } else {
            return (
              <div key={ticket.id} style={{ padding: "0 80px" }}>
                <TicketDetail ticket={ticket} onSelect={onSelect} />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.modalcheckout}>
        <Button
          type="primary"
          onClick={onCheckout}
          disabled={selected ? false : true}
          style={{ float: "right", marginTop: 16 }}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default TicketList;
