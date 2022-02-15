import { useState, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import { NavLink, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from '../components/siteSideBar'
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";
import DashBoard from "./DashBoard";

export const LoginUser = ({ user }) => {
  return (
    <>
      <h3>
        Welcome <span className="text-primary">{user.user}</span>
      </h3>
    </>
  );
};
function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [user, setUser] = useState({});
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert(`${label} is required. You can't leave it blank.`);
      // setStatus("Error: " + label);
      // setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    const userLogin = ctx.users.filter(
      (item) => item.email == email && item.pwd == pwd
      
    );

    if (userLogin.length == 0) {
      alert("email or password is incorrect");
      clearForm();
    }
    if (userLogin.length != 0) {
      setShow(false);
      const elementIndex = ctx.users.findIndex(
        (item) => item.email == email && item.pwd == pwd
      );
      //   const element = ctx.users[elementIndex]
      ctx.users.splice(elementIndex, 1);
      ctx.users.splice(0, 0, userLogin[0]);
      setUser(userLogin[0]);
    }
    ctx.log = true;
  }

  function clearForm() {
    setEmail("");
    setPwd("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {show ? (
        <>
        <div style={{height:"600px"}}>
        <Card
        style={{ maxWidth: "25rem", marginTop: "8rem", backgroundColor:"rgba(108, 108, 108, 0.4)", width: "100%",
                  maxWidth: "420px",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "1rem" }}
         className="loginCard"
          status={status}
          body={
            <>
            <h1 className="logocolor" style={{border:"solid 2px grey", padding:".4rem", textAlign:"center", fontWeight:"bold"}}>Login</h1>
              <br />
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setIsdisabled(false);
                  if (!e.currentTarget.value) setIsdisabled(true);
                }}
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={pwd}
                onChange={(e) => {
                  setPwd(e.currentTarget.value);
                  setIsdisabled(false);
                  if (!e.currentTarget.value) setIsdisabled(true);
                }}
              />
              <br />
              <button
                disabled={isDisabled ? true : false}
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          }
        />
        </div>
        </>
      ) : (
        <>
      
          <div style={{height:"650px"}}>
          {/* <Card
            style={{ maxWidth: "60%", marginTop: "4rem", marginLeft:"10rem" }}
            bgcolor="dark"
            status={status}
            body={
              <>
                <LoginUser user={user} />
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
          /> */}
          <DashBoard />
        </div>
        </>
      )}
    </>
  );
}

export default Login;
