import React from 'react'
import { Button, Space } from 'antd'
import styles from '../../styles/Event.module.css'
import { CheckCircleOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'


function TicketConfirm({event, selected, form}) {

    var start_date = dayjs(event.start_date).format('ddd, D MMMM, YYYY')
    var end_date = dayjs(event.end_date).format('ddd, D MMMM, YYYY')
    var start_time = event.start_time.substring(0, event.start_time.length-3)
    var end_time = event.end_time.substring(0, event.end_time.length-3)

    var dateTime = event.start_date == event.end_date 
    ? (start_date + " " + start_time + " - " + end_time)
    : (start_date + " " + start_time + " - " + end_date + " " + end_time)

    var length = () => {
        var total = 0
        console.log(selected)
        Object.entries(selected).map(
            ([k, v]) => {total += v.quantity}
          )
        return total
    }

    return (
        <>
        <div className={styles.modalconfirm} style={{paddingTop: 20}}>
            <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
               <CheckCircleOutlined style={{color: '#06c', marginRight: 10, display: 'inline-block', verticalAlign: 'middle', fontSize: 24}}/>
                <span style={{fontWeight: 500, fontSize: 20}}>Thanks for you for your order!</span>
            </div>
            <div style={{margin:"20px 0px" }}>
                <p style={{margin: 5, fontSize: 18}}>You purchased {length()} {length() > 1 ? "tickets" : "ticket"}</p>
                Your {length() > 1 ? "tickets" : "ticket"} will be emailed to {form.getFieldValue('email')}
            </div>
            <Button style={{marginBottom: 10}}type="primary" block>Print Ticket</Button>
            <hr/>
            <div style={{marginTop:20 }}>
                <p style={{margin: 0, fontSize: 18}}>{dateTime}</p>
                <p style={{margin: 0, fontSize: 16, color: "#86868b"}}>{event.location.name}, {event.location.city ? event.location.city + ", " : null} {event.location.country}</p>
            </div>
        </div>
        <div className={styles.modalcheckout}>
            <Button style={{marginLeft:80, marginTop: 16}}>View Tickets</Button>
        </div>
        </>
    )
}

export default TicketConfirm
