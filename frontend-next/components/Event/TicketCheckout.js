import React, { useEffect, useState } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index";
import styles from "../../styles/Event.module.css";
import MyCheckoutForm from "./MyCheckoutForm";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import {
  API_BASE_URL,
  marketplace_address,
} from "../../constants/apiConstants";
import NFTMarketplace from "../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51J6zloLkmGdhw5ZB6E6ktgMavvmdoVQWb3luZrABDPmBouMLgtApzAX2k2RTFJEpw2OYOkNHv8YBu6elZAovz0Mr00fEDaZlGZ"
);

function TicketCheckout({
  event,
  total,
  selected,
  onCheckout,
  form,
  setTokenId,
}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const currentTickets = useSelector((state) => state.currentTickets);
  const currentAddons = useSelector((state) => state.currentAddons);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    dispatch(
      allActions.addonActions.setFinalPerTicketAddons(
        currentTickets.totalNoOfTickets
      )
    );
  }, []);

  const [minting, setMinting] = useState(false);

  useEffect(() => {
    console.log(currentTickets, currentAddons);
    try {
      var local_tickets = [];
      for (const seperatedTicketId in currentTickets.seperated_tickets) {
        local_tickets.push({
          ticket_type:
            currentTickets.seperated_tickets[seperatedTicketId]["id"]
        });
      }
      console.log(local_tickets)
      setTickets(local_tickets);
    } catch (e) {
      console.log("Error while trying to compute Tickets");
      console.log(e);
    }
  }, [currentTickets, currentAddons]);

  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function buyNft(val) {
    setMinting(true);
    // const url = await uploadToIPFS()
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    const price = ethers.utils.parseUnits(val, "ether");
    let contract = new ethers.Contract(
      marketplace_address,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken("", price, {
      value: listingPrice,
    });
    await transaction.wait();
    console.log(transaction);
    axios
      .post(`${API_BASE_URL}/orders/bookings`, {
        event: event.id,
        amount: total,
        tickets: tickets,
        token_id: transaction.hash,
        wallet_address: transaction.from
      })
      .then((res) => {
        setTokenId(transaction.hash)
        setMinting(false);
        onCheckout();
      });
  }

  return (
    <>
      <div className={styles.modalcheckoutpage}>
        <div style={{ padding: "0 80px" }}>
          <span className={styles.checkouttitle}>Contact information</span>

          <Form form={form} layout="vertical">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  initialValue={
                    currentUser.loggedIn
                      ? currentUser?.user?.user?.first_name
                      : null
                  }
                  rules={[
                    { required: true, message: "First name is required." },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  initialValue={
                    currentUser.loggedIn
                      ? currentUser?.user?.user?.last_name
                      : null
                  }
                  rules={[
                    { required: true, message: "Last name is required." },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Email"
              name="email"
              initialValue={
                currentUser.loggedIn ? currentUser?.user?.user?.email : null
              }
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Email is required.",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>

          <span className={styles.checkouttitle}>Payment information</span>
          <span className={styles.checkoutsubtitle}>Credit or debit card</span>
          <Button onClick={() => buyNft("0.5")} loading={minting}>
            {minting ? "Minting NFT ticket" : "Buy Now"}
          </Button>
        </div>
        {/* <Elements stripe={stripePromise}>
          <MyCheckoutForm
            form={form}
            event={event}
            total={total}
            selected={selected}
            onCheckout={onCheckout}
          />
        </Elements> */}
      </div>
    </>
  );
}

export default TicketCheckout;
