import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, Col, Row } from 'antd'
import dayjs from 'dayjs'
import { Container } from 'react-bootstrap'

const { Meta } = Card;


export default function Event({event}) {
    return (
        <Link href={'event/'+event.id} passHref>
        <Card
        className="mb-4"
        hoverable
        cover={
            <Image
            alt="example"
            src={event.image}
            width={300}
            height={150}
            layout="responsive"
            objectFit="cover"
            />
          }
          >
              <Meta
              title={event.name}
              description={dayjs(event.start_date + event.start_time).format('ddd, MMM D, HH:mm')}
              />
        </Card>
        </Link>
    )
}

