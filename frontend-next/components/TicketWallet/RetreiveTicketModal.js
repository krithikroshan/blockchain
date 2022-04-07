import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Select, Form, Input, InputNumber } from "antd";

const { Option } = Select;

export default function RetreiveTicketModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Retrieve Ticket
      </Button>
      <Modal
        title="Do you want to retreive this ticket?"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <p>
          Retreiving this ticket will cause it to be decoupled from the NFT and
          cannot be transferred later.
        </p>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="First name"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input style={{ width: 300 }} />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="last name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input style={{ width: 300 }} />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
