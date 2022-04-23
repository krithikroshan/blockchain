import React, { useState, useEffect} from 'react'
import { Table, Row, Col } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../../components/Common/Layout'
import { API_BASE_URL } from '../../../constants/apiConstants';
import axios from 'axios'

export default function Index() {


    const [events, setEvents] = useState(null);

    const currentUser = useSelector((state) => state.currentUser);

    useEffect(()=>{
        if(currentUser.loggedIn){
            axios.get(`${API_BASE_URL}/events/user/me`, {headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer '+ currentUser.user.access_token
              }})
              .then(res => setEvents(res.data))
              .catch(err => console.log(err))
        }
    },[currentUser])

    useEffect(()=>{
        console.log(events)
    }, [events])

    const columns = [
        {
            title: 'Event',
            dataIndex: 'name',
            key: 'name',
            width: 600,
            // render: text => <Link href='/manage/events/1/details'>{text}</Link>,
        },
        {
            title: 'Sold',
            dataIndex: 'sold',
            key: 'sold',
        },
        {
            title: 'Gross',
            dataIndex: 'gross',
            key: 'gross',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ]

    return (
        <Layout>
            <Row>
                <Col span={22} push={1}>
                    <h3>Events</h3>
                    <Table columns={columns} dataSource={events}/>
                </Col>
            </Row>
        </Layout>
    )
}


// export async function getServerSideProps() {
//     const currentUser = useSelector((state) => state.currentUser);
//     if(currentUser.loggedIn){
//         const res = await fetch(`${API_BASE_URL}/events/me/`+session.user.id)
//         const events = await res.json()
//         return {
//             props: {
//             events
//             }
//         }
//     }
//   }
