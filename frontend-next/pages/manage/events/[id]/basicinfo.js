import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Form, Input, Select, Radio, DatePicker, TimePicker, Row, Col, Button } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../../../components/Manage/Layout'
import styles from '../../../../styles/Manage.module.css'
import { types, categories, tzStrings } from '../../../../constants/createEvent'
import moment from 'moment'
import { API_BASE_URL } from '../../../../constants/apiConstants'

const { Option } = Select;

export default function Basicinfo(event) {

    const router = useRouter()
    const [form] = Form.useForm();

    const [loading, setLoading ] = useState(false)
    const [venue, setVenue ] = useState("Venue")

    const currentUser = useSelector((state) => state.currentUser);

    const onSubmit = () => {
        form.validateFields()
        .then((values) => {
            console.log("HELLo")
            console.log(values)
            // setLoading(true)
            fetch(`${API_BASE_URL}/events/create`,
            {
                body: JSON.stringify({
                    location: {
                      name: values.venue_name,
                      address_line1: values.address_line1,
                      address_line2: values.address_line2,
                      city: values.city,
                      state: values.state,
                      postal_code: values.postal_code,
                      country: values.country,
                    },
                  name: values.name,
                  event_category: values.category,
                  event_type: values.event_type,
                  start_date: moment(values.start_date).format("YYYY-MM-DD"),
                  start_time: moment(values.start_time).format("hh:mm"),
                  end_date: moment(values.end_date).format("YYYY-MM-DD"),
                  end_time: moment(values.end_time).format("hh:mm"),
                }),
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + currentUser.user.access_token
                  },
                  method: 'POST'
            })
            .then(res => {
                console.log("DONE")
                if (res.ok) {
                    res.json().then(data => ({
                        data: data,
                        status: res.status
                    }))
                    .then(body => {
                        var id = body.data.id
                        router.push(`/manage/events/${id}/details`)
                    })
                    setLoading(false)
                }
                else{
                  setLoading(false)
                  console.log(res)
                }
              }
            )
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        });
    }

    useEffect(()=>{
        form.setFieldsValue({
            location_type: "Venue"
          });
    },[])
    return (
        <Layout defaultKey='1' id={event.id}>
            <div style={{maxWidth:864, margin: "auto"}}>
                <div style={{maxWidth:567, margin:"auto"}}> 
                    <h1 className={styles.maintitle}>Basic Info</h1>
                    <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                </div>
                <Form form={form} layout="vertical">
                <div style={{maxWidth: 567, margin:"auto"}}>
                <Form.Item name="name" label="Event Title" rules={[{ required: true }]}>
                    <Input size="large"/>
                </Form.Item>
                <Row gutter={14}>
                    <Col span={12}>
                        <Form.Item name="event_type" label="Type" rules={[{ required: true }]}>
                            <Select
                            size="large"
                            placeholder="Select Type"
                            allowClear
                            >
                                {types.map((type, index) => (
                                    <Option key={index} value={type.key}>{type.value}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                            <Select
                            size="large"
                            placeholder="Select Category"
                            allowClear
                            >
                                {categories.map((category, index) => (
                                    <Option key={index} value={category.key}>{category.value}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                </div>
                <hr style={{margin: "32px 0px", color:"#d2d2d7"}}/>
                <div style={{maxWidth:567, margin:"auto"}}> 
                    <h1 className={styles.maintitle}>Location</h1>
                    <p>Help people in the area discover your event and let attendees know where to show up.</p>
                </div>
                <div style={{maxWidth: 567, margin:"auto"}}>
                    <Form.Item
                        name="location_type"
                    >
                        <Radio.Group size="large" onChange={e => setVenue(e.target.value)}>
                        <Radio.Button value="Venue">Venue</Radio.Button>
                        <Radio.Button value="Online">Online event</Radio.Button>
                        <Radio.Button value="TBA">To be announced</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {venue === "Venue"
                    ? (<><Form.Item name="venue_name" label="Venue Name" rules={[{ required: true }]}>  
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item name="address_line1" label="Street Name">  
                        <Input size="large"/>
                    </Form.Item>
                    <Form.Item name="address_line2" label="Additional Address Info">  
                        <Input size="large"/>
                    </Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name="city" label="City">  
                                <Input size="large"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="state" label="State">  
                                <Input size="large"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item name="postal_code" label="Postal Code">  
                                <Input size="large"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="country" label="Country">  
                                <Input size="large"/>
                            </Form.Item>
                        </Col>
                    </Row></>)
                    : venue === "Online" ? <p>Online events have unique event pages where you can add links to livestreams and more</p>
                    : null}


                </div>
                <hr style={{margin: "32px 0px", color:"#d2d2d7"}}/>
                <div style={{maxWidth:567, margin:"auto"}}> 
                    <h1 className={styles.maintitle}>Date and time</h1>
                    <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>

                    <Row>
                        <Col>
                        <Form.Item name="start_date" label="Start date" rules={[{ required: true }]}>
                            <DatePicker size="large" style={{marginRight: 16}}/>
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item name="start_time" label="Start time" rules={[{ required: true }]}>
                            <TimePicker size="large" format = 'HH:mm' minuteStep={15}/>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Item name="end_date" label="End date" rules={[{ required: true }]}>
                            <DatePicker size="large" style={{marginRight: 16}}/>
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item name="end_time" label="End time" rules={[{ required: true }]}>
                            <TimePicker size="large" format = 'HH:mm' minuteStep={15}/>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="timezone" label="Timezone" rules={[{ required: true }]}>
                        <Select
                        size="large"
                        placeholder="Select Timezone"
                        allowClear
                        >
                            {tzStrings.map((timezone, i) => 
                                <Option key={i} value={timezone.value}>{timezone.label}</Option>
                            )}
                        </Select>
                    </Form.Item>
                </div>
                <hr style={{margin: "32px 0px", color:"#d2d2d7"}}/>
                <div style={{maxWidth:567, margin:"auto"}}>
                    <Button type="primary" loading={loading} style={{float:"right"}} onClick={onSubmit}>Save & Continue</Button>
                </div>
                </Form> 
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
