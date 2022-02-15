import { useState, useContext } from "react";
import { UserContext } from "../components/context";
import Card from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./alldata.css";

function AllData() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const ctx = useContext(UserContext);

  const Table = () => {
    const userdata = ctx.users.filter((item) => item.user != "");
    const UserInfo = userdata.map((info, index) => {
      return (
        <div className="content">
          <table key={index} style={{ overflowX: "auto" }}>
            <tr>
              <th className="header" style={{fontSize:"1.5rem", color:"#0079d5"}}>Account Info</th>
            </tr>
              <tr>
                <th>User Name</th>
                <td key={ctx.user}>{info.user}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td key={ctx.email}>{info.email}</td>
              </tr>
              <tr>
                <th>Password</th>
                <td key={ctx.pwd}>{info.pwd}</td>
              </tr>
              <tr>
                <th>Date Created</th>
                <td key={ctx.created}>{info.created}</td>
              </tr>
          </table>
        </div>
      );
    });

    return <tbody>{UserInfo}</tbody>;
  };

return (
    //> shows the login button and create an account if user not found/ not created/ not logged in
    <>
      {ctx.users[0].user == "" ? (
        <>
         <Link to ="/login" class="fa fa-user" ></Link>
          <div className="text-center fs-4 mt-5">
            Please <LoginLogoutButton />  
            <br />
           or {" "}
            <NavLink to="/createaccount/">Create An Account.</NavLink>
          </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <Table />
        </>)
      }
    </>      
  );
}

export default AllData;
