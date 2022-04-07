import styles from "../../styles/Tickets.module.css";
import TicketCard from "../../components/TicketWallet/TicketCard";
import Layout from "../../components/Common/Layout";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations";

export default function ViewTickets() {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Layout>
      <div className={styles.tickets_view_wrapper}>
        <h4>
          {currentUser.loggedIn
            ? capitalizeFirstLetter(currentUser.user.user.first_name) + "'s"
            : "Your"}{" "}
          Orders
        </h4>
        <hr />
        <div style = {{display: "inline-block", paddingRight: "20px"}}> 
          <TicketCard
            ticket={{
              eventName: "The Weeknd",
              image: "https://access-metaverse.s3.amazonaws.com/weeknd.jpg",
              time: "Oct 16, 8:00 PM ",
              noOfTickets: 1,
              retreived: false,
              ticketType: "Deluxe",
              addons: []
            }}
          />
        </div>
        <div style = {{display: "inline-block", paddingRight: "40px"}}> 
          <TicketCard
            ticket={{
              eventName: "Wimbledon",
              image: "https://access-metaverse.s3.amazonaws.com/Wimbledon-Ambience-2019.jpg",
              time: "Oct 20, 9:00 PM ",
              noOfTickets: 1,
              retreived: true,
              ticketType: "Reserved Seating",
              addons: [{name: "Black T Shirt", quantity: 1}, {name: "White VIP T Shirt", quantity: 2} ]
            }}
          />
        </div>
      </div>
      ;
    </Layout>
  );
}
