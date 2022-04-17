import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Tag } from "antd";
import Image from "next/image";
import RetreiveTicketModal from "./RetreiveTicketModal";
import AddonInfoModal from "./AddonInfoModal";

const { Meta } = Card;

export default function TicketCard({ ticket, order }) {
  const [aggTickets, setAggTickets] = useState({});
  const [aggAddons, setAggAddons] = useState({});

  useEffect(() => {
    var { _aggTickets, _aggAddons } = aggTicketsAndAddons();
    setAggTickets(_aggTickets);
    setAggAddons(_aggAddons);
  }, []);

  function aggTicketsAndAddons() {
    var _aggTickets = {};
    var _aggAddons = {};
    for (var i = 0; i < order?.booking_tickets?.length; i++) {
      var _ticket_type = order.booking_tickets[i].ticket_type.name;
      if (_ticket_type in _aggTickets) {
        _aggTickets[_ticket_type]++;
      } else {
        _aggTickets[_ticket_type] = 1;
      }
      for (var j = 0; j < order?.booking_tickets[i].add_ons.length; j++) {
        var _addon = order.booking_tickets[i].add_ons[j].add_on;
        if (_addon.name in _aggAddons) {
          _aggAddons[_addon.name]++;
        } else {
          _aggAddons[_addon.name] = 1;
        }
      }
    }
    return { _aggTickets, _aggAddons };
  }

  const resellTicket = () => {}
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          alt={order.event.name}
          src={order.event.image}
          width={300}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      }
    >
      <Meta title={order.event.name} description={order.stripe_charge_id} />
      <div style={{ paddingTop: "12px" }}>
        Date & Time:{" "}
        {order.event.start_date + ", " + order.event.start_time.slice(0, 5)}
      </div>
      <div style={{ paddingTop: "12px" }}>
        <Tag color="blue">x {order.booking_tickets.length} Ticket(s)</Tag>
        {/* Ticket Retrieval Status */}
        {/* {!ticket.retreived ? (
              <Tag color="red">Unretreived Ticket</Tag>
            ) : (
              <Tag color="green">Ticket Retreived</Tag>
            )} */}
      </div>
      <div style={{ paddingTop: "12px" }}>
        <div style={{ paddingRight: "5px", display: "inline-block" }}>
          <Button onClick={resellTicket} type="primary">
            Resell Ticket
          </Button>
        </div>
        {/* Ticket Retreival Button */}
        {/* {!ticket.retreived ? (
              <div style={{ paddingRight: "5px", display: "inline-block" }}>
                <RetreiveTicketModal />
              </div>
            ) : (
              <></>
            )} */}
      </div>
    </Card>
  );
}
