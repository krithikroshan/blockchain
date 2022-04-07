import React from "react";
import { Card } from "antd";
import { Tag } from "antd";
import RetreiveTicketModal from "./RetreiveTicketModal";
import AddonInfoModal from "./AddonInfoModal";

const { Meta } = Card;

export default function TicketCard(props) {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <Card
          style={{ width: 300 }}
          cover={<img alt={props.ticket.eventName} src={props.ticket.image} />}
        >
          <Meta
            title={props.ticket.eventName}
            description={props.ticket.ticketType + ", " + props.ticket.time}
          />
          <div style={{ paddingTop: "12px" }}>
            <Tag color="blue">x 1 Ticket</Tag>
            {!props.ticket.retreived ? (
              <Tag color="red">Unretreived Ticket</Tag>
            ) : (
              <Tag color="green">Ticket Retreived</Tag>
            )}
          </div>
          <div style={{ paddingTop: "12px" }}>
            <div style={{ paddingRight: "5px", display: "inline-block" }}>
              <AddonInfoModal
                ticketType={props.ticket.ticketType}
                addons={props.ticket.addons}
              />
            </div>
            {!props.ticket.retreived ? (
              <div style={{ paddingRight: "5px", display: "inline-block" }}>
                <RetreiveTicketModal />
              </div>
            ) : (
              <></>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
