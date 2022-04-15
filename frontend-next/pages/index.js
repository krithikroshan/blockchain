import Event from '../components/Home/Event'
import Layout from '../components/Common/Layout'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { API_BASE_URL } from '../constants/apiConstants'

// External components
import { Card, Col, Row } from 'antd'
import { Container } from 'react-bootstrap'

export default function Home({events}) {

  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    console.log('currentUser is ', currentUser)
  }, [currentUser])
  
  return (
    <Layout>
      <Container style={{marginTop: 24}}>
        <Row gutter={20} style={{marginBottom:24}}>
          { events?.map(event => (
            <Col xl={6} lg={8} md={12} sm={24} xs={24} key={event.id}>
              <Event event={event}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}


export async function getServerSideProps({}) {
  const res = await fetch(`${API_BASE_URL}/events?published=true`)
  const events = await res.json()
  return {
    props: {
      events
    }
  }
}
