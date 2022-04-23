import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Card, Button, Tag, Tooltip, Modal, Empty, Form, Input, InputNumber } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux'
import TicketDetail from '../../../../components/Event/TicketDetail'
import Layout from '../../../../components/Common/Layout'
import styles from '../../../../styles/Event.module.css'
import dayjs from 'dayjs'
import { API_BASE_URL } from '../../../../constants/apiConstants';

export default function SellTicket({event, tickets}) {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selected, setSelected] = useState(null)
    const [total, setTotal] = useState(0)
    const [step, setStep] = useState(1)
    const [selectedTicket, setSelectedTicket] = useState(null)

    const currentUser = useSelector((state) => state.currentUser);

    var start_date = dayjs(event.start_date).format('ddd, D MMM, YYYY')
    var end_date = dayjs(event.end_date).format('ddd, D MMM, YYYY')
    var start_time = event.start_time.substring(0, event.start_time.length-3)
    var end_time = event.end_time.substring(0, event.end_time.length-3)

    var dateTime = event.start_date == event.end_date 
        ? (start_date + " " + start_time + " - " + end_time)
        : (start_date + " " + start_time + " - " + end_date + " " + end_time)


    const [ticketForm] = Form.useForm();
    const [contactForm] = Form.useForm();

    const showModal = (ticket) => {
        setSelectedTicket(ticket)
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
  
      const onClose = () => {
          setSelected(null)
          setTotal(0)
          setStep(1)
      }

      const onNext = () => {
          ticketForm.validateFields()
          .then((values) => {
              setStep(2)
          })
      }


    const onSelect = (quantity, ticket) => {
        console.log(quantity, ticket)
        var sel = {quantity: quantity, ticket: ticket}
        console.log(sel)
        var newSelected = {...selected}
        newSelected[ticket.id] = sel
        console.log(newSelected)
        if(quantity === 0){
            delete newSelected[ticket.id]
        }
        if(Object.keys(newSelected).length === 0){
            setSelected(null)
        }
        else{
            setSelected(newSelected);
        }
    }

    console.log(tickets)

    const testtickets = [
        {name: 'VIP', quantity: 2, resale: false, price: 100, royalty: 2.5, permission: 'None'},
        {name: 'General Admission', quantity: 33, resale: true, price: 750, royalty: 1, permission: 'All'},
        {name: 'Reserved Seating', quantity: 12, resale: true, price: 400, royalty: 2, permission: 'Custom'}
    ]

    return (
        <Layout>
            <Container>
                <h2 className={styles.checkouttitle}>Sell Tickets</h2>
                <Row gutter={40}>
                    <Col span={8}>
                        <Image 
                            src={event.image}
                            alt={event.name}
                            width={960}
                            height={480}
                            layout="responsive"
                            objectFit="cover"
                            />
                        <Card>
                            <Row gutter={20}>
                                <Col span={7}><span className={styles.boxdate}>{dayjs(event.start_date).format('ddd, D MMM')}</span></Col>
                                <Col span={17}>
                                    <h4 className={styles.eventheading}>{event.name}</h4>
                                    {event.location.name}<br/>
                                    {event.location.address_line1}<br/>
                                    {event.location.address_line2 ? event.location.address_line2 : null}
                                    {event.location.city ? event.location.city : null} {event.location.state ? event.location.state : null} {(event.location.city || event.location.state) ? <br/> : null}
                                    {event.location.country} {event.location.postal_code}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <h2 className={styles.checkouttitle} style={{marginBottom: 5}}>Tickets you own</h2>
                        <p className={styles.ticketend}>0x21c158f8c4c5b67583d413de445f5688ec40db92a37d2a8a9311b350154e6de8</p>
                        <hr/>
                    <div>
                        {testtickets.map((ticket) => (
                            <>
                            <Row>
                                <Col span={8}>
                                    <span className={styles.ticketnamespan}>{ticket.name}</span>
                                </Col>
                                <Col span={11}>
                                    <span className={styles.ticketquantity}>{ticket.quantity} tickets</span>
                                </Col>
                                <Col span={5}>
                                    {ticket.resale
                                    ? (<div><Button type="primary" style={{width:138}} onClick={()=>showModal(ticket)}>Sell Tickets</Button></div>)
                                    : (<Tooltip title="Your current wallet does not have permission to resell this ticket.">
                                        <Tag color="error">No Resale Permission</Tag>
                                    </Tooltip>)}
                                </Col>

                            </Row>
                            <hr/>
                            </>
                        ))}
                    </div>
                    </Col>
                </Row>
            </Container>
            <Modal 
                title={null}
                visible={isModalVisible} 
                footer={null}
                width={1080}
                afterClose={onClose}
                centered
                bodyStyle={{height: '90vh', padding: 0}}
                onCancel={handleCancel}
                style={{padding: 0}}
                maskClosable={false}
                closeIcon={<CloseOutlined style={{color: '#ccc'}}/>}
                >
                    <Row style={{height: "90vh"}}>

                        {step === 1
                        ? (<Col xs={24} sm={24} md={16} lg={16}>
                            <div className={styles.modalheader}>
                                <h1 className={styles.title}>{event.name}</h1>
                                <p style={{color: "#86868b", fontSize: 14, textAlign: "center"}}>{step !== 3 ? dateTime : null}</p>
                            </div>
                            <div style={{marginTop:100, padding: "24px 80px"}}>
                                <Form layout="vertical" form={ticketForm}>
                                <span className={styles.checkouttitle}>Ticket information</span>
                                    <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]} placeholder="1">
                                        <InputNumber style={{width:"100%"}} min={1} max={selectedTicket?.quantity}/>
                                    </Form.Item>
                                    <Form.Item name="price" label="Price" rules={[{ required: true }]} placeholder="1">
                                        <InputNumber style={{width:"100%"}} min={1}/>
                                    </Form.Item>
                                </Form>
                                
                            </div>
                            <div className={styles.modalcheckout}>
                                <Button type="primary" onClick={()=>onNext()} style={{float:"right", marginTop: 16}}>Continue to Checkout</Button>
                            </div>
                        </Col>)
                        : (
                            <Col xs={24} sm={24} md={16} lg={16}>
                                <div className={styles.modalheader}>
                                    <h1 className={styles.title}>{event.name}</h1>
                                    <p style={{color: "#86868b", fontSize: 14, textAlign: "center"}}>{step !== 3 ? dateTime : null}</p>
                                </div>
                                <div style={{marginTop:100, padding: "24px 80px"}}>
                                <Form
                                    form={contactForm}
                                    layout="vertical"
                                >
                                    <Row gutter={24}>
                                        <Col span={12}>
                                            <Form.Item
                                                label="First Name"
                                                name="firstName"
                                                initialValue={currentUser?.user.user.first_name}
                                                rules={[{ required: true, message: 'First name is required.' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Last Name"
                                                name="lastName"
                                                initialValue={currentUser?.user.user.last_name}
                                                rules={[{ required: true, message: 'Last name is required.' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        initialValue={currentUser?.user.user.email}
                                        rules={[{ required: true,type: 'email', message: 'Email is required.' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Form>
                                    <span className={styles.checkouttitle}>Payment Method</span>
                                    <p>Set up a payout method to get paid securely by connecting your Stripe account</p>
                                    <Button type="primary" size="large">Connect Stripe</Button>
                                </div>
                                <div className={styles.modalcheckout}>
                                    <Button type="primary" style={{float:"right", marginTop: 16}}>Sell Tickets</Button>
                                </div>
                            </Col>
                        )}
                        <Col xs={24} sm={24} md={8} lg={8}>
                            <div style={{height: "90vh", backgroundColor: "#fafafa"}}>
                                <Image 
                                    src = {event.image}
                                    alt = {event.name}
                                    width = {320}
                                    height = {160}
                                    layout="responsive"
                                    objectFit="cover"
                                />
                                <div style={{padding: 24}}>
                                    <span className={styles.ticketnamespan}>{selectedTicket?.name}</span>
                                    <hr/>
                                    <p style={{color: '#333', letterSpacing: 1.25}}>
                                        Original price:
                                        <span style={{float:'right'}}>ETH{selectedTicket?.price}</span>
                                    </p>
                                    <p style={{color: '#333', letterSpacing: 1.25}}>
                                        Royalties:
                                        <span style={{float:'right'}}>{selectedTicket?.royalty}%</span>
                                    </p>
                                    <p style={{color: '#333', letterSpacing: 1.25}}>
                                        Resale:
                                        <span style={{float:'right'}}>{selectedTicket?.permission}</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal>
        </Layout>
    )
}




export async function getStaticPaths() {
    const paths = await getEventPaths()

    return {
        paths,
        fallback: false
      }
    
}

async function getEventPaths() {
    const res = await fetch(`${API_BASE_URL}/events?published=true`)
    const events = await res.json()
    return events.map(event => {
        return {
        params: {
            id: event.id.toString()
        }
        }
    })
}

export async function getStaticProps({ params }) {
    const event = await fetch(`${API_BASE_URL}/events/`+params.id).then(res => res.json())
    const tickets = await fetch(`${API_BASE_URL}/events/${params.id}/ticket_types`).then(res => res.json())

    return {
        props: {
            event, tickets
        }
        
    }
}
