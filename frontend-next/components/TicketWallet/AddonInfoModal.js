import React from "react";
import { Modal, Button, Space } from "antd";
import { Empty } from "antd";

export default function AddonInfoModal(props) {
  const ticketType = props.ticketType;
  const addons = props.addons;

  function info() {
    Modal.info({
      title: "Overview",
      content: (
        <div>
					<p style={{ fontWeight: 600 , fontFamily: "monospace"}}>1 x {props.ticketType}</p>
          <hr />
          <p style={{ fontWeight: 600 , fontFamily: "monospace", letterSpacing: "1px"}}>Addons:</p>
          {addons.length == 0 ? (
            <div style={{marginLeft: -45}}>
              <Empty />{" "}
            </div>
          ) : (
            addons.map((addon) => (
              <>
                <p style={{fontFamily: "monospace"}}>{addon.quantity} x {addon.name}</p>
              </>
            ))
          )}
        </div>
      ),
      onOk() {},
    });
  }
  return (
    <div>
      <Space wrap>
        <Button onClick={info} type="primary">
          Addons
        </Button>
      </Space>
    </div>
  );
}
