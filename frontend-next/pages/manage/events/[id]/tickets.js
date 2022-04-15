import React, {useState, useEffect} from 'react'
import axios from 'axios'
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

    const [name, setName] = useState("General Admission")
    const [price, setPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [start_date, setStartDate] = useState(moment())
    const [start_time, setStartTime] = useState(moment('12:00', 'HH:mm'))
    const [end_date, setEndDate] = useState(moment())
    const [end_time, setEndTime] = useState(moment('18:00', 'HH:mm'))
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(10)
    const [wallets, setWallets] = useState(10)
    const [resale, setResale] = useState("None")

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
        console.log("clicked save")
        // // form.validateFields()
        // .then((values) => {
            console.log(name, price, quantity, start_date, start_time, end_date, end_time)
            console.log(wallets)
            // var wallets2 = [...wallets]
            // wallets2.push(wallet)

            console.log(event)
            console.log(event.event.id)
            axios
        .post(`${API_BASE_URL}/events/${event.event.id}/ticket_types`,
        {
            event: event.event.id,
            name: name,
            total_quantity: quantity,
            available_quantity: quantity,
            payment: "Paid",
            price: price,
            sale_start: moment(start_date).format('YYYY-MM-DD') + 'T' + moment(start_time).format('hh:mm') + 'Z',
            sale_end: moment(end_date).format('YYYY-MM-DD') + 'T' + moment(end_time).format('hh:mm') + 'Z',
            description: "description",
            min: min,
            max: max, 
            resale_permissions: resale
            // resale_wallets: "0x"
          }, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + currentUser.user.access_token,
            },
          }).then((res) => {console.log(res)})
        // }).catch(err => console.log("err", err))
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

                  <Ticket form={form} setName={setName} setPrice={setPrice} setStartDate={setStartDate} setStartTime={setStartTime} setQuantity={setQuantity} setEndDate={setEndDate} setEndTime={setEndTime} setWallets={setWallets} setResale={setResale} resale={resale} wallets={wallets}/>
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
