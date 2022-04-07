import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import styles from '../../styles/Event.module.css'
import { API_BASE_URL } from "../../constants/apiConstants";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
    // const fontSize = useResponsiveFontSize();
  const options = 
    () => ({
      style: {
        base: {
          //   fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    })
    // [fontSize]
};

const MyCheckoutForm = (props) => {

  const [loading, setLoading ] = useState(false)
  const currentUser = useSelector((state) => state.currentUser);
  const currentTickets = useSelector((state) => state.currentTickets);
  const currentAddons = useSelector((state) => state.currentAddons);
  const [tickets, setTickets] = useState([])

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  useEffect(() => {
    console.log(currentTickets,currentAddons )
    try {
    var local_tickets = []
    for (const seperatedTicketId in currentTickets.seperated_tickets) {
      var local_addons = []
      for (const addonId in currentAddons.finalPerTicketAddons[seperatedTicketId]) {
        if (addonId == "ticket_id") {
          continue;
        }
        local_addons.push({
          add_on: currentAddons.finalPerTicketAddons[seperatedTicketId][addonId]['addon']['id'],
          quantity: currentAddons.finalPerTicketAddons[seperatedTicketId][addonId]["quantity"],
          option: 1
        })
      }
      local_tickets.push({
        ticket_type: currentTickets.seperated_tickets[seperatedTicketId]["id"],
        addons: local_addons
      })
    }
    setTickets(local_tickets)
  }
  catch (e) {
    console.log("Error while trying to compute Tickets")
    console.log(e)
  }
  }, [currentTickets, currentAddons])

  useEffect(() => {
    console.log("Tickets are ", tickets)
  }, [tickets])

  const handleSubmit = async (event) => {
    event.preventDefault();

    props.form.validateFields()
    .then((values) => {
      setLoading(true)
      const payload = stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      })
      .then(response => {
        var token = response.paymentMethod.id
        fetch(
          `${API_BASE_URL}/orders/bookings`,
          {
            body: JSON.stringify({
              payment_id: token,
              event: props.event.id,
              amount: props.total,
              tickets: tickets
            }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ currentUser.user.access_token
            },
            method: 'POST'
          }).then(res => {
          if (res.ok) {
            console.log(res)
            setLoading(false)
            props.onCheckout()
          }
          else{
            setLoading(false)
            console.log(res)
          }
        }).catch((err) => {console.log(err)});
      })

    })
    .catch((err) => {console.log(err)});

};

  const state = {
    loading: false,
    error: null,
    success: false,
  };

  return (
    <form onSubmit={handleSubmit} style={{padding: "0 80px"}}>
      <div style={{border: "1px solid rgb(217,217,217)", padding: 10}}>
        <CardElement
          options={options}
          onReady={() => {}}
          onChange={(event) => {}}
          onBlur={() => {}}
          onFocus={() => {}}
        />
      </div>
      <div className={styles.modalcheckout} style={{marginLeft: "-80px"}}>
            <Button type="primary" loading={loading} onClick={handleSubmit} style={{float:"right", marginTop: 16}}>Place Order</Button>
        </div>
    </form>
  );
};

export default MyCheckoutForm;
