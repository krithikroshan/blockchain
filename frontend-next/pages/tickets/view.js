import React, { useEffect, useState } from "react";
import styles from "../../styles/Tickets.module.css";
import TicketCard from "../../components/TicketWallet/TicketCard";
import Layout from "../../components/Common/Layout";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";
import { Empty } from "antd";

export default function ViewTickets({ orderDetails }) {
  const currentUser = useSelector((state) => state.currentUser);
  const router = useRouter(orderDetails);
  const [orders, setOrders] = useState([]);

    async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "ropsten",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await marketplaceContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenURI = await marketplaceContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenURI)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        tokenURI
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }

  useEffect(() => {
    getOrderDetails();
  }, []);

  useEffect(() => {
    console.log("Current orders are ", orders);
  }, [orders]);


  function getOrderDetails() {
    axios
      .get(`${API_BASE_URL}/orders/details/0x4f839cd3d4ef9266e2ffb4ba3fdc9bce85196ac8`, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(()=>{
    if(1+1 == 3){
      loadNfts()
    }
  })

  return (
    <Layout>
      <div className={styles.tickets_view_wrapper}>
        <h4>Your Orders</h4>
        <hr />
        {orders.length == 0 ? (
          <div style={{ paddingTop: "30px" }}>
            <Empty
              description={
                <span>No tickets YET! Buy a few and come back.</span>
              }
            />
          </div>
        ) : (
          <div>
            {orders.map((order) => {
              if (order.booking_tickets.length > 0) {
                return (
                  <div style={{ display: "inline-block", padding: "20px" }}>
                    <TicketCard
                      order={order}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
      ;
    </Layout>
  );
}
