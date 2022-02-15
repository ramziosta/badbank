import { useContext } from "react";
import { UserContext } from "../components/context";
// import Card from "../components/context";
// import LoginLogoutButton from "../components/LoginLogoutButton";
// import SiteSideBar from "../components/siteSideBar";
// import { NavLink } from "react-router-dom";
import "./alldata.css";

function DashBoard() {
  const ctx = useContext(UserContext);

  const Table = () => {
    const userdata = ctx.users.filter((item) => item.user != "");
    const UserInfo = userdata.map((info, index) => {
      return (
        <div className="content">
          <table key={index} style={{ overflowX: "auto" }}>
            <tr>
              <th className="header" style={{fontSize:"1.5rem", color:"#0079d5"}}>Account Summary</th>
            </tr>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Balance</th>
                <th>Date</th>
                
              </tr>
              <tr>
                <td key={ctx.transactionType}>{info.transactionType}</td>
                <td key={ctx.transactionType}>{info.transactionAmoubt}</td>
                <td key={ctx.balance}>${info.balance}</td>
                <td key={ctx.transactionDate}>{info.transactionDate}</td>
              </tr>
          
          </table>
        </div>
      );
    });

    return <tbody>{UserInfo}</tbody>;
  };

  return (
    <>
      <Table />
    </>
  );
}

export default DashBoard;
{/* <SiteSideBar /> */}