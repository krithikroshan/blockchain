import React, { useEffect } from "react";
import { Form, Input, Row, Col } from "antd";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions/index"
import styles from "../../styles/Event.module.css";
import MyCheckoutForm from "./MyCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51J6zloLkmGdhw5ZB6E6ktgMavvmdoVQWb3luZrABDPmBouMLgtApzAX2k2RTFJEpw2OYOkNHv8YBu6elZAovz0Mr00fEDaZlGZ"
);

function TicketCheckout({ event, total, selected, onCheckout, form }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const currentTickets = useSelector((state) => state.currentTickets);

  useEffect(() => {
    dispatch(allActions.addonActions.setFinalPerTicketAddons(currentTickets.totalNoOfTickets));
  }, []);

  // console.log(
  //   currentUser
  // )

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
                  initialValue={currentUser.loggedIn ? currentUser?.user?.user?.first_name : null}
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
                  initialValue={currentUser.loggedIn ? currentUser?.user?.user?.last_name : null}
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
                  initialValue={currentUser.loggedIn ? currentUser?.user?.user?.email : null}
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
        </div>
        <Elements stripe={stripePromise}>
          <MyCheckoutForm
            form={form}
            event={event}
            total={total}
            selected={selected}
            onCheckout={onCheckout}
          />
        </Elements>
      </div>
    </>
  );
}

export default TicketCheckout;
