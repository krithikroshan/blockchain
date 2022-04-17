import React, { useEffect, useState } from "react";
import styles from "../../styles/Tickets.module.css";
import TicketCard from "../../components/TicketWallet/TicketCard";
import Layout from "../../components/Common/Layout";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";
import { Empty } from "antd";

export default function ViewTickets({ orderDetails }) {
  const currentUser = useSelector((state) => state.currentUser);
  const router = useRouter(orderDetails);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderDetails();
  }, []);

  useEffect(() => {
    console.log("Current orders are ", orders);
  }, [orders]);


  function getOrderDetails() {
    axios
      .get(`${API_BASE_URL}/orders/details/0x4f839cd3d4ef9266e2ffb4ba3fdc9bce85196ac8`, {
        headers: {
          "Content-Type": "application/json"
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
        <h4>Your Orders</h4>
        <hr />
        {orders.length == 0 ? (
          <div style={{ paddingTop: "30px" }}>
            <Empty
              description={
                <span>No tickets YET! Buy a few and come back.</span>
              }
            />
          </div>
        ) : (
          <div>
            {orders.map((order) => {
              if (order.booking_tickets.length > 0) {
                return (
                  <div style={{ display: "inline-block", padding: "20px" }}>
                    <TicketCard
                      order={order}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
      ;
    </Layout>
  );
}
