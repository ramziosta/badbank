import { useState, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
export const timeStamp = new Date().toLocaleDateString();
function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");  
  const [isDisabled, setIsdisabled] = useState(true);
  const ctx = useContext(UserContext);

  function validate(field) {
    if (Number(field) != field) {
      
      alert("Input not valid. You have to enter a number");
      clearForm();
      return false;
    }
    if (Number(field) <= 0) {
      alert("Input not valid. You have to enter a positive number more than 0");
      clearForm();
      return false;
    }

    return true;
  }

  function handleDeposit() {
   console.log("💵 "+ amount);
    if (!validate(amount, "amount")) return;
    ctx.users.push({transactionType:'Deposit', amount, transactionDate: timeStamp });
    ctx.users[0].balance += parseInt(amount);
    //add ctx.user[0].transactionType
    //add ctx.user[0].transactionAmount
    //add ctx.user[0].transactionDate
    setShow(false);
  }

  function clearForm() {
    setAmount("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    //> shows the login button and create an account if user not found/ not created/ not logged in
    <>
  {ctx.users[0].user == "" ? (
        <>
         <Link to ="/login" class="fa fa-user" ></Link>
          <div className="text-center fs-4 mt-5" style={{height: '600px'}}>
            Please <LoginLogoutButton />  
            <br />
           or {" "}
            <NavLink to="/createaccount/">Create An Account.</NavLink>
          </div>
        </>
      ) : (
  
        <>
          {/* //> tennary operator to show and hide the card depending on the handleDeposit */}
          {show ?
           (
            <>
            <SiteSideBar />     
            <div style={{height:"650px"}} >      
            <Card
              style={{ maxWidth: "25rem", marginTop: "4rem" }}
              bgcolor="dark"
              header="Make a deposit"
              status={status}
              body={
                <>
                  <h3>Balance: ${ctx.users[0].balance}</h3>
                  <br />
                  Deposit Amount:
                  <br />
                  <input
                    type="input"
                    className="form-control"
                    id="amount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.currentTarget.value);
                      setIsdisabled(false);
                      if (!e.currentTarget.value) setIsdisabled(true);
                    }}
                  />
                  <br />
                  <button
                    disabled={isDisabled ? true : false}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleDeposit}
                  >
                    Deposit
                  </button>
                </>
              }
            />
            </div>
            </>
          ) :
           
           (<>
            <SiteSideBar />
            <div style={{height:"650"}}>
            <Card
              style={{ maxWidth: "25rem", marginTop: "4rem" }}
              bgcolor="dark"
              header="Deposit"
              status={status}
              body={
                <>
                  <h5 className="fs-2 text-primary">Success</h5>
                  <br />
                  <h5>Deposit Amount: ${amount} </h5>
                  <hr />
                  <div>Current Balance: ${ctx.users[0].balance} </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={clearForm}
                  >
                    New Deposit Transaction
                  </button>
                </>
              }
            />
            </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Deposit;
