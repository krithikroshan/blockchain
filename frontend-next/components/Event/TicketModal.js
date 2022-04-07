import React, { useState, useEffect } from "react";
import { Row, Col, Button, Empty, Form } from "antd";
import Image from "next/image";
import TicketList from "./TicketList";
import AddOnList from "./AddOnList";
// import AddOnTabs from "./AddOnTabs";
import styles from "../../styles/Event.module.css";
import TicketCheckout from "./TicketCheckout";
import TicketConfirm from "./TicketConfirm";
import dayjs from "dayjs";
import axios from 'axios'
import { API_BASE_URL } from "../../constants/apiConstants";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";

export default function TicketModal({
  event,
  tickets,
  selected,
  addonSelected,
  setSelected,
  setAddonSelected,
  total,
  setTotal,
  step,
  setStep,
}) {
  const currentAddons = useSelector((state) => state.currentAddons);
  const currentTickets  =  useSelector((state) => state.currentTickets);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [addons, setAddons] = useState(null);

  var start_date = dayjs(event.start_date).format("ddd, D MMM, YYYY");
  var end_date = dayjs(event.end_date).format("ddd, D MMM, YYYY");
  var start_time = event.start_time.substring(0, event.start_time.length - 3);
  var end_time = event.end_time.substring(0, event.end_time.length - 3);

  var dateTime =
    event.start_date == event.end_date
      ? start_date + " " + start_time + " - " + end_time
      : start_date + " " + start_time + " - " + end_date + " " + end_time;

  const onSelect = (quantity, ticket) => {
    var sel = { quantity: quantity, ticket: ticket };
    var newSelected = { ...selected };
    newSelected[ticket.id] = sel;
    if (quantity === 0) {
      delete newSelected[ticket.id];
    }
    if (Object.keys(newSelected).length === 0) {
      setSelected(null);
    } else {
      setSelected(newSelected);
    }
  };

  useEffect(() => {
    dispatch(
      allActions.ticketActions.setSelectedTickets(selected)
    );
  }, [selected]);

  useEffect(() => {
    var total = parseFloat(calculateSubtotal()) + parseFloat(calculateFees());
    setTotal(total);
  }, [selected, currentAddons]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/events/${event.id}/add_ons`)
      .then((res) => {
        setAddons(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onCheckout = () => {
    if (addons.length > 1){
      if (step === 1 && currentTickets.totalNoOfTickets === 1) {
        setStep(step + 2);
      } else {
        setStep(step + 1);
      }
    } else {
      setStep(4)
    }
  };

  const calculateSubtotal = () => {
    var subtotal = 0;
    if (selected) {
      Object.entries(selected).map(([k, item]) => {
        subtotal += item.quantity * item.ticket.price;
      });
    }
    if (currentAddons.cumulativeAddons) {
      Object.entries(currentAddons.cumulativeAddons).map(([k, item]) => {
        subtotal += item.quantity * item.addon.price;
      });
    }
    return subtotal;
  };

  const calculateFees = () => {

    return parseFloat(calculateSubtotal() * 0.05).toFixed(2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <Row style={{ height: "90vh" }}>
      <Col xs={24} sm={24} md={16} lg={16}>
        <div className={styles.modalheader}>
          <h1 className={styles.title}>{event.name}</h1>
          <p style={{ color: "#86868b", fontSize: 14, textAlign: "center" }}>
            {step !== 3 ? dateTime : null}
          </p>
        </div>
        {step === 1 ? (
          <TicketList
            event={event}
            tickets={tickets}
            onSelect={onSelect}
            onCheckout={onCheckout}
            selected={selected}
          />
        ) : step === 2 ? (
          // ADDONS: STEP 1 -- Modal Screen
          <AddOnList
            event={event}
            addons={addons}
            onCheckout={onCheckout}
            selected={selected}
            commonAddons={true}
          />
        ) : step === 3 ? (
          // ADDONS: STEP 1 -- Modal Screen
          <AddOnList
            event={event}
            addons={addons}
            onCheckout={onCheckout}
            selected={selected}
            commonAddons={false}
          />
        ) : step === 4 ? (
          <TicketCheckout
            event={event}
            tickets={tickets}
            total={total}
            selected={selected}
            onCheckout={onCheckout}
            form={form}
          />
        ) : step === 5 ? (
          <TicketConfirm event={event} selected={selected} form={form} />
        ) : null}
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <div
          style={{
            height: "90vh",
            backgroundColor: "#fafafa",
            overflow: "scroll",
          }}
        >
          <Image
            src={event.image}
            alt={event.name}
            width={320}
            height={160}
            layout="responsive"
            objectFit="cover"
          />
          <div style={{ padding: 24 }}>
            {selected ? (
              <div>
                <p style={{ fontWeight: 600 }}>Order summary</p>
                <hr />
                <p style={{ fontWeight: 600 }}>Tickets</p>
              </div>
            ) : (
              <Empty description={false} />
            )}
            {selected &&
              Object.entries(selected).map(([k, item]) => (
                <div key={k}>
                  <p style={{ color: "#333", letterSpacing: 1.25 }}>
                    {item.quantity} x {item.ticket.name}
                    <span style={{ float: "right" }}>
                      ${item.ticket.price * item.quantity}
                    </span>
                  </p>
                </div>
              ))}
            {currentAddons.cumulativeAddons ? (
              <div>
                <hr />
                <p style={{ fontWeight: 600 }}>Addons</p>
              </div>
            ) : (
              <></>
            )}
            {currentAddons.cumulativeAddons &&
              Object.entries(currentAddons.cumulativeAddons).map(
                ([k, item]) => (
                  <div key={k}>
                    <p style={{ color: "#333", letterSpacing: 1.25 }}>
                      {item.quantity} x {item.addon.name}
                      <span style={{ float: "right" }}>
                        ${item.addon.price * item.quantity}
                      </span>
                    </p>
                  </div>
                )
              )}
            {selected && (
              <>
                <hr />
                <p style={{ color: "#333", letterSpacing: 1.25 }}>
                  Subtotal
                  <span style={{ float: "right" }}>${calculateSubtotal()}</span>
                </p>
                <p style={{ color: "#333", letterSpacing: 1.25 }}>
                  Fees
                  <span style={{ float: "right" }}>${calculateFees()}</span>
                </p>
                <hr />
                <p
                  style={{
                    color: "#333",
                    letterSpacing: 1.25,
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Total
                  <span style={{ float: "right" }}>${total}</span>
                </p>
              </>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}
