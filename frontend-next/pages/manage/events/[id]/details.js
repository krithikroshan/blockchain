import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Radio,
  DatePicker,
  TimePicker,
  Row,
  Col,
  Button,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Layout from "../../../../components/Manage/Layout";
import styles from "../../../../styles/Manage.module.css";
import {
  types,
  categories,
  tzStrings,
} from "../../../../constants/createEvent";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import { API_BASE_URL } from "../../../../constants/apiConstants";

const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

export default function Details({ event }) {
  return (
    <Layout defaultKey="2" id={event.id}>
      <div style={{ maxWidth: 864, margin: "auto" }}></div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = await getEventPaths()

//   return {
//       paths,
//       fallback: true
//     }
  
// }

// async function getEventPaths() {
//   const res = await fetch(`${API_BASE_URL}/events`)
//   const events = await res.json()
//   return events.map(event => {
//       return {
//       params: {
//           id: event.id.toString()
//       }
//       }
//   })
// }

export async function getServerSideProps({ params }) {
  const event = await fetch(`${API_BASE_URL}/events/`+params.id).then(res => res.json())

  return {
      props: {
          event
      }
      
  }
}

