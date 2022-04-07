import React, { useState } from 'react'
import { Form, Radio, Input, InputNumber, Button, Row, Col, DatePicker, TimePicker, Collapse } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

// import styles from '../../styles/Manage.module.styles'
const { Panel } = Collapse;
const { TextArea } = Input;


function Ticket({form}) {

    const [payment, setPayment] = useState("Paid")
    const [resale, setResale] = useState("None")


    return (
        <Form form={form} layout="vertical">
            <Form.Item name="payment">
                <Radio.Group size="large" onChange={e => setPayment(e.target.value)} style={{display:"flex", justifyContent:"space-between"}}>
                    <Radio.Button value="Paid" style={{minWidth:100, textAlign:"center"}}>Paid</Radio.Button>
                    <Radio.Button value="Free" style={{minWidth:100, textAlign:"center"}}>Free</Radio.Button>
                    <Radio.Button value="Donation" style={{minWidth:100, textAlign:"center"}}>Donation</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input size="large"/>
            </Form.Item>
            <Form.Item name="quantity" label="Available quantity" rules={[{ required: true }]}>
                <InputNumber size="large" style={{width:"100%"}} min={1} max={100000}/>
            </Form.Item>
            <Form.Item name="price" label="Price">
                <InputNumber disabled={payment==="Free"} addonBefore="SGD$" size="large" style={{width:"100%"}} min={1} max={100000}/>
            </Form.Item>
            <Row>
                <Col span={12}>
                <Form.Item name="start_date" label="Start date" rules={[{ required: true }]}>
                    <DatePicker size="large" style={{marginRight: 16}}/>
                </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item name="start_time" label="Start time" rules={[{ required: true }]}>
                    <TimePicker size="large" format = 'HH:mm' minuteStep={15} style={{width:"100%"}}/>
                </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                <Form.Item name="end_date" label="End date" rules={[{ required: true }]}>
                    <DatePicker size="large" style={{marginRight: 16}}/>
                </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item name="end_time" label="End time" rules={[{ required: true }]}>
                    <TimePicker size="large" format = 'HH:mm' minuteStep={15} style={{width:"100%"}}/>
                </Form.Item>
                </Col>
            </Row>
            <Collapse ghost expandIconPosition='right' style={{margin: 0, padding:0}}>
            <Panel header="Resale Settings" key="1">
                <div style={{marginTop: 20}}>
                    <Form.Item name="resale" label="Resale Permissions">
                        <Radio.Group size="large" onChange={e => setResale(e.target.value)} style={{display:"flex", justifyContent:"space-between"}}>
                            <Radio.Button value="None" style={{minWidth:100, textAlign:"center"}}>None</Radio.Button>
                            <Radio.Button value="All" style={{minWidth:100, textAlign:"center"}}>All</Radio.Button>
                            <Radio.Button value="Custom" style={{minWidth:100, textAlign:"center"}}>Custom</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {resale === "Custom" ?
                    (<>
                    <Form.Item name="wallet" label="Wallet Addresses" rules={[{ required: true }]}>
                        <Input size="large" addonBefore="0x"/>
                    </Form.Item>
                    <Form.List name="wallets">
                        {(fields, { add, remove }, { errors }) => (
                        <>
                        {fields.map((field, index) => (
                        <div key={field.key} style={{display:"flex", align:"start"}}>
                            <Form.Item
                            style={{width: "100%"}}
                            {...field}
                            rules={[
                                {
                                required: true,
                                message: "Please input wallet address.",
                                },
                            ]}
                            >
                                <Input size="large" addonBefore="0x" style={{width: "100%"}}/>
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(field.name)} style={{fontSize:20, marginTop: 10, marginLeft: 10}}/>
                        </div>
                        ))}
                        <Form.Item>
                        <Button type="dashed" onClick={() => add()} block size="large" icon={<PlusOutlined />}>
                            Add Wallet
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
                </>) : null}
                </div>
            </Panel> 
            <Panel header="Advanced Settings" key="2">
                <div style={{marginTop: 20}}>
                    <Form.Item name="description" label="Description">  
                        <TextArea autoSize={{ minRows: 2, maxRows: 10}} showCount maxLength={2500}/>
                    </Form.Item>
                    <Row gutter={24}>
                        <Col span={12}>
                        <Form.Item name="min" label="Minimum Quantity" rules={[{ required: true }]}>
                            <InputNumber size="large" style={{width:"100%"}} min={1} max={100000}/>
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item name="max" label="Maximum Quantity" rules={[{ required: true }]}>
                            <InputNumber size="large" style={{width:"100%"}} min={1} max={100000}/>
                        </Form.Item>
                        </Col>
                    </Row>
                </div>
            </Panel>
            </Collapse>
        </Form>
    )
}

export default Ticket
