import React, { useEffect, useState } from "react";
import styles from "../../styles/Tickets.module.css";
import TicketCard from "../../components/TicketWallet/TicketCard";
import Layout from "../../components/Common/Layout";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";

export default function ViewTickets({ orderDetails }) {
  const currentUser = useSelector((state) => state.currentUser);
  const router = useRouter(orderDetails);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    redirectToLogin();
    getOrderDetails();
  }, []);

  useEffect(() => {
    redirectToLogin();
  }, [currentUser]);

  useEffect(() => {
    console.log("Current orders are ", orders);
  }, [orders]);

  function redirectToLogin() {
    if (!currentUser.loggedIn) {
      router.push({
        pathname: "/login",
        query: {
          redirect: true,
          redirectTo: "/tickets/view",
        },
      });
    }
  }

  function getOrderDetails() {
    axios
      .get(`${API_BASE_URL}/orders/details`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentUser.user.access_token,
        },
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <div className={styles.tickets_view_wrapper}>
        <h4>
          {(currentUser.loggedIn
            ? capitalizeFirstLetter(currentUser.user.user.first_name) + "'s"
            : "Your") + " Orders"}
        </h4>
        <hr />
        <div>
          {orders.map((order) => {
            if (order.booking_tickets.length > 0) {
              return (
                <div style={{ display: "inline-block", padding: "20px" }}>
                  <TicketCard
                    order={order}
                    ticket={{
                      eventName: "The Weeknd",
                      image:
                        "https://access-metaverse.s3.amazonaws.com/weeknd.jpg",
                      time: "Oct 16, 8:00 PM ",
                      noOfTickets: 1,
                      retreived: false,
                      ticketType: "Deluxe",
                      addons: [],
                    }}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      ;
    </Layout>
  );
}
