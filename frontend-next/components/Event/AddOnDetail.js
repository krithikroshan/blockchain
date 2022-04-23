// ADDON: Step 5 -- buttons for each addon
import React, { useState, useEffect } from "react";
import { InputNumber, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import styles from "../../styles/Event.module.css";

function AddOnDetail({ addon, ticket, commonAddons, seperatedTicketId }) {
  const dispatch = useDispatch();
  const currentTickets  =  useSelector((state) => state.currentTickets);

  const onChange = (e) => {
    setQuantity(e);
    var currentAddonObject = {
      seperatedTicketId: !commonAddons ? seperatedTicketId : "all",
      ticketId: !commonAddons ? ticket.id : "all",
      totalNoOfTickets: currentTickets.totalNoOfTickets,
      addon: addon,
      quantity: e,
    };
    dispatch(allActions.addonActions.setPerTicketAddons(currentAddonObject));
  };

  const [selAddons, setSelAddons] = useState("");
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (tickets) {
      setLoading(false);
    }
  }, [tickets]);

  const options = [];

  addon.options.map((option) => {
    options.push({ label: option.name, value: option.name });
  });

  return (
    <div>
      {!loading ? (
        <>
          <div style={{ marginBottom: 20 }}>
            <InputNumber
              style={{ float: "right", marginTop: 10 }}
              size="large"
              min={0}
              // value={quantity }
              //   max={addon.max_quantity}
              defaultValue={0}
              onChange={onChange}
            />
            <span className={styles.ticketname}>{addon.name}</span>
            <span className={styles.ticketprice}>ETH{addon.price}</span>
            <Radio.Group
              options={options}
              onChange={(e) => setSelAddons(e.target.value)}
              value={selAddons}
              optionType="button"
            />
          </div>
          {/* <span className={styles.ticketend}>
            Sales end on {dayjs(addon.sale_end).format("D MMM YYYY")}
          </span> */}
        </>
      ) : null}
    </div>
  );
}

export default AddOnDetail;
