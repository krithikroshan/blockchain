import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { Tag } from "antd";
import { InputNumber } from 'antd';
import Image from "next/image";
import RetreiveTicketModal from "./RetreiveTicketModal";
import AddonInfoModal from "./AddonInfoModal";
import Link from "next/link";
import { ethers } from "ethers";
import Web3Modal from 'web3modal'
import { marketplace_address } from "../../constants/apiConstants";
import NFTMarketplace from '../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'


const { Meta } = Card;

export default function TicketCard({ ticket, order }) {
  const [aggTickets, setAggTickets] = useState({});
  const [aggAddons, setAggAddons] = useState({});

  const [price, setPrice] = useState(1)

  useEffect(() => {
    var { _aggTickets, _aggAddons } = aggTicketsAndAddons();
    setAggTickets(_aggTickets);
    setAggAddons(_aggAddons);
  }, []);

  function onChange(value) {
    console.log('changed', value);
    setPrice(value)
  }

  function aggTicketsAndAddons() {
    var _aggTickets = {};
    var _aggAddons = {};
    for (var i = 0; i < order?.booking_tickets?.length; i++) {
      var _ticket_type = order.booking_tickets[i].ticket_type.name;
      if (_ticket_type in _aggTickets) {
        _aggTickets[_ticket_type]++;
      } else {
        _aggTickets[_ticket_type] = 1;
      }
      for (var j = 0; j < order?.booking_tickets[i].add_ons.length; j++) {
        var _addon = order.booking_tickets[i].add_ons[j].add_on;
        if (_addon.name in _aggAddons) {
          _aggAddons[_addon.name]++;
        } else {
          _aggAddons[_addon.name] = 1;
        }
      }
    }
    return { _aggTickets, _aggAddons };
  }

  var blockUrl = "https://ropsten.etherscan.io/tx/"+order.booking_tickets[0].token_id

  async function resellTicket() {
    // if (!price) return
    // const web3Modal = new Web3Modal()
    // const connection = await web3Modal.connect()
    // const provider = new ethers.providers.Web3Provider(connection)
    // const signer = provider.getSigner()

    // const priceFormatted = ethers.utils.parseUnits(price.toString(), 'ether')
    // let contract = new ethers.Contract(marketplace_address, NFTMarketplace.abi, signer)
    // let listingPrice = await contract.getListingPrice()

    // listingPrice = listingPrice.toString()
    // let transaction = await contract.resellToken(order.booking_tickets[0].token_id, priceFormatted, { value: listingPrice })
    // await transaction.wait()
   
    // router.push('/')
  }
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Image
          alt={order.event.name}
          src={order.event.image}
          width={300}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      }
    >
      <Meta title={order.event.name} description={order.stripe_charge_id} />
      <div style={{ paddingTop: "12px" }}>
        Date & Time:{" "}
        {order.event.start_date + ", " + order.event.start_time.slice(0, 5)}
      </div>
      <div style={{ paddingTop: "12px" }}>
      {/* <Link href={blockUrl} >
        {order.booking_tickets[0].token_id.slice(0, 30)}...
      </Link> */}
      </div>
      <div style={{ paddingTop: "12px" }}>
        <Tag color="blue">{order.booking_tickets[0].ticket_type.name} Ticket</Tag>
        {/* Ticket Retrieval Status */}
        {/* {!ticket.retreived ? (
              <Tag color="red">Unretreived Ticket</Tag>
            ) : (
              <Tag color="green">Ticket Retreived</Tag>
            )} */}
      </div>
      <div style={{ paddingTop: "12px" }}>
        <div style={{ paddingRight: "5px", display: "inline-block" }}>
        <InputNumber
          defaultValue="1"
          min="0"
          max="10"
          style={{ width: 100 }}
          step="0.005"
          onChange={onChange}
          stringMode
        />
          <Button onClick={resellTicket} type="primary" style={{marginLeft:10}}>
            Resell Ticket
          </Button>
        </div>
        {/* Ticket Retreival Button */}
        {/* {!ticket.retreived ? (
              <div style={{ paddingRight: "5px", display: "inline-block" }}>
                <RetreiveTicketModal />
              </div>
            ) : (
              <></>
            )} */}
      </div>
    </Card>
  );
}
