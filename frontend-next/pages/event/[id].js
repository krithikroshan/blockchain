import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Common/Layout";
import { Row, Col, Button, Space, Modal } from "antd";
import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons";
import styles from "../../styles/Event.module.css";
import TicketModal from "../../components/Event/TicketModal";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import { API_BASE_URL } from "../../constants/apiConstants";
import { useRouter } from 'next/router'

export default function Event({ event, tickets }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [addonSelected, setAddonSelected] = useState(null);
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(1);

	const router = useRouter();
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const showModal = () => {
		console.log(currentUser)
		// if (!currentUser.loggedIn) {
		// 	router.push({pathname: "/login", query: {
		// 		redirect: true,
		// 		redirectTo: `/event/${event.id}`
		// 	}})
		// 	return
		// }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClose = () => {
    setSelected(null);
    dispatch(allActions.addonActions.clearAddons());
    setTotal(0);
    setStep(1);
  };

  var ticket_min = Math.min.apply(
    null,
    tickets.map((v) => v.price)
  );
  var ticket_max = Math.max.apply(
    null,
    tickets.map((v) => v.price)
  );

  return (
    <>
      <Layout>
        <div className={styles.blurimage}>
          <Image
            alt="blurred image background"
            src={event.image}
            className={styles.blurredimage}
            layout="fill"
          />
        </div>
        <div className={styles.box} style={{ marginTop: 30 }}>
          <Row>
            <Col md={16} sm={24} xs={24}>
              <Image
                src={event.image}
                alt={event.name}
                width={960}
                height={480}
                layout="responsive"
                objectFit="cover"
              />
            </Col>
            <Col md={8} sm={24} xs={24} className={styles.boxdetails}>
              <span className={styles.boxdate}>
                {dayjs(event.start_date).format("ddd, D MMM")}
              </span>
              <h4 className={styles.boxname}>{event.name}</h4>
              <p className={styles.boxpricing}>
                {ticket_min === ticket_max
                  ? "$" + ticket_min
                  : "$" + ticket_min + " - " + "$" + ticket_max}
              </p>
            </Col>
          </Row>
          <Row>
            <div className={styles.boxpanel}>
              <Col span={6}></Col>
              <Col offset={10} span={8}>
                <Button
                  type="primary"
                  className={styles.button}
                  onClick={showModal}
                >
                  Book Tickets
                </Button>
              </Col>
            </div>
          </Row>
          <Row>
            <div className={styles.boxbody}>
              <Col span={16} style={{ padding: "0 80px" }}>
                <p className={styles.summary}>{event.summary}</p>
                <Space />
                <h3 className={styles.smallheading}>About this event</h3>
                <p>{event.description}</p>
              </Col>
              <Col span={8} style={{ padding: "0 20px" }}>
                <h4 className={styles.tinyheading}>Date and Time</h4>
                <p style={{ marginBottom: 50 }}>
                  {dayjs(event.start_date).format("ddd, DD MMMM, YYYY")}
                  <br />
                  {event.start_time} - {event.end_time}
                </p>
                <h4 className={styles.tinyheading}>Location</h4>
                <p style={{ marginBottom: 50 }}>
                  {event.location.name}
                  <br />
                  {event.location.address_line1}
                  <br />
                  {event.location.address_line2
                    ? event.location.address_line2
                    : null}
                  {event.location.city ? event.location.city : null}{" "}
                  {event.location.state ? event.location.state : null}{" "}
                  {event.location.city || event.location.state ? <br /> : null}
                  {event.location.country} {event.location.postal_code}
                </p>
              </Col>
            </div>
          </Row>
        </div>
      </Layout>
      <Modal
        title={null}
        visible={isModalVisible}
        footer={null}
        width={1080}
        afterClose={onClose}
        centered
        bodyStyle={{ height: "90vh", padding: 0 }}
        onCancel={handleCancel}
        style={{ padding: 0 }}
        maskClosable={false}
        closeIcon={<CloseOutlined style={{ color: "#ccc" }} />}
      >
        <TicketModal
          event={event}
          tickets={tickets}
          selected={selected}
          setSelected={setSelected}
          addonSelected={addonSelected}
          setAddonSelected={setAddonSelected}
          total={total}
          setTotal={setTotal}
          step={step}
          setStep={setStep}
        />
      </Modal>
    </>
  );
}

// export async function getStaticPaths() {
//     const paths = await getEventPaths()

//     return {
//         paths,
//         fallback: true
//       }

// }

// async function getEventPaths() {
//     const res = await fetch(`${API_BASE_URL}/events?published=true`)
//     const events = await res.json()
//     return events.map(event => {
//         return {
//         params: {
//             id: event.id.toString()
//         }
//         }
//     })
// }

export async function getServerSideProps({ params }) {
  const event = await fetch(
    `${API_BASE_URL}/events/${params.id}?expand=location`
  ).then((res) => res.json());
  const tickets = await fetch(
    `${API_BASE_URL}/events/${params.id}/ticket_types`
  ).then((res) => res.json());
  return {
    props: {
      event: event,
      tickets: tickets,
    },
  };
}
