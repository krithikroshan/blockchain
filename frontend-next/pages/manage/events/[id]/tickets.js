import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Form, Drawer, Select, Radio, DatePicker, TimePicker, Row, Col, Button } from 'antd'
import Layout from '../../../../components/Manage/Layout'
import styles from '../../../../styles/Manage.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { types, categories, tzStrings } from '../../../../constants/createEvent'
import moment from 'moment'
import Ticket from '../../../../components/Manage/Ticket'
import { API_BASE_URL } from '../../../../constants/apiConstants'

const { Option } = Select;

export default function Tickets(event) {

    const router = useRouter()
    const [form] = Form.useForm();

    const [loading, setLoading ] = useState(false)
    const [visible, setVisible ] = useState(false)

    const currentUser = useSelector((state) => state.currentUser);

    useEffect(()=>{
        form.setFieldsValue({
            ticket: "Paid",
            name: "General Admission",
            start_date: moment(),
            start_time: moment('12:00', 'HH:mm'),
            end_date: moment(),
            end_time: moment('18:00', 'HH:mm'),
            resale: "None",
            min: 1,
            max: 10,
          });
    },[])

    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }

    const onSave = () => {
        form.validateFields()
        .then((values) => {

            var wallets = [...values.wallets]
            wallets.push(values.wallet)

            console.log(values)
            console.log(event)
            console.log(event.event.id)
            fetch(`${API_BASE_URL}/events/ticket/create`,
            {
                body: JSON.stringify({
                    event: event.event.id,
                    name: values.name,
                    quantity: values.quantity,
                    payment: values.payment,
                    price: values.price,
                    sale_start: moment(values.start_date).format('YYYY-MM-DD') + 'T' + moment(values.start_time).format('hh:mm') + 'Z',
                    sale_end: moment(values.end_date).format('YYYY-MM-DD') + 'T' + moment(values.end_time).format('hh:mm') + 'Z',
                    description: values.description,
                    min: values.min,
                    max: values.max, 
                    resale_permissions: values.resale,
                    resale_wallets: wallets.toString()
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ currentUser.user.access_token
                  },
                  method: 'POST'
            })
            .then(res => console.log(res))
        })
    }

    return (
        <Layout defaultKey='3' id={event.id}>
            <div>
                <div style={{maxWidth:864, margin: "auto"}}>
                        <h1 className={styles.maintitle}>Tickets</h1>
                    <hr style={{margin: "32px 0px", color:"#d2d2d7"}}/>
                    <div style={{height:40, marginBottom: 40}}>
                        <Button type="primary" style={{float:"right"}} size='large' onClick={showDrawer}>Add Ticket</Button>
                    </div>
                </div>
                <Drawer title="Add ticket" visible={visible} onClose={onClose} width={400} maskClosable={false} closable={true} zIndex={100} style={{paddingTop:64}}
                footer={
                    <div
                      style={{
                        textAlign: 'right',
                        paddingBottom: 64
                      }}
                    >
                      <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Cancel
                      </Button>
                      <Button onClick={onSave} type="primary">
                        Save
                      </Button>
                    </div>
                  }>

                  <Ticket form={form}/>
                </Drawer>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getEventPaths()

    return {
        paths,
        fallback: true
      }
    
}

async function getEventPaths() {
    const res = await fetch(`${API_BASE_URL}/events`)
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

    return {
        props: {
            event
        }
        
    }
}
