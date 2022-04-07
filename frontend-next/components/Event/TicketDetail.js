import React from "react";
import { InputNumber } from "antd";
import styles from "../../styles/Event.module.css";
import dayjs from "dayjs";

function TicketDetail({ ticket, onSelect }) {
  const onChange = (e) => {
    onSelect(e, ticket);
  };

  return (
    <div>
      <div>
        <InputNumber
          style={{ float: "right", marginTop: 10 }}
          size="large"
          min={0}
          max={ticket.max_quantity}
          defaultValue={0}
          onChange={onChange}
        />
        <span className={styles.ticketname}>{ticket.name}</span>
        <span className={styles.ticketprice}>${ticket.price}</span>
      </div>
      <span className={styles.ticketend}>
        Sales end on {dayjs(ticket.sale_end).format("D MMM YYYY")}
      </span>
    </div>
  );
}

export default TicketDetail;
