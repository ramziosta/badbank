import { useContext, useState } from "react";
import { UserContext } from "../components/context";
import Card from "../components/context";
// import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./alldata.css";
import LoginUser from './login'
function DashBoard() {
  const [user, setUser] = useState({});
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
                <td key={ctx.transactionAmount}>{info.amount}</td>
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
      <SiteSideBar />
          <Card
            style={{ maxWidth: "60%", marginTop: "4rem", marginLeft:"10rem" }}
            bgcolor="dark"
            body={
              <>
              
                <br />
                <Row className="text-center">
                  <Col>
                    <Link to="/deposit" className="btn btn-primary Link">
                      Make a deposit
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/withdraw" className="btn btn-primary Link">
                      Make a withdraw
                    </Link>
                  </Col>
                </Row>
              </>
            }
          />
      <Table />
    </>
  );
}

export default DashBoard;
