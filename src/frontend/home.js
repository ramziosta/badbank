import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import pic2 from "../images/bb7.jpg";
import pic3 from "../images/bb6.jpg";
import bb from "../images/bank.png";
function Home() {
  const ctx = useContext(UserContext);
  return (

    <div>
      <div className="text-end text-uppercase"></div>
      <Link to ="/login" class="fa fa-user" ></Link>
      
      {/* //< card image and info on bottom */}

      <div className="container main">
        <div className="row">
          <div className="column-66 mainText">
          <div className="mainheader" >
            <h1 className="xlarge-font">
                <img src={bb} alt="bb" style={{ width: "10%" }} />
              <b className="badbank" >
                <span className="logocolor">B</span>ad
                <span className="logocolor2">B</span>ank
              </b>
            </h1>
            </div>
          
            <h1 className="" style={{ color: "#0079d5" }}>
              <b>
                <span className="twomill">2,000,000 </span><br />satisfied clients<br />
                can't be wrong!
              </b>
            </h1>
          
            {/* //> if user exist and has an account and has logged this div will show  */}

            {ctx.log ? (
              <div className="loggedIn">
                {/* <h5 className="card-title fs-4">Logged in</h5> */}
              </div>
            ) : (
              //> otherwise it will ask the user to  create an account
              <h5 className="card-title fs-2 maininfo">
                No Fee Checking and <br />Savings Accounts
              </h5>
            )}
            {/* //< if the user has an account and logged in hide the create account link   */}
            {ctx.log ? (
              ""
            ) : (
              //< this link will appear if the user doesnt have an account, when first visiting the page and not logged in
              <Link
                to="/createaccount"
                className="btn btn-primary fs-2 Link "
                style={{ borderRadius: "0px", marginTop: "1rem" }}
              >
                Create an Account
              </Link>
            )}
          </div>
          <div className="column-33">
            {/* <img src={pic1} width="335" height="471" alt="rr" /> */}
          </div>
        </div>
      </div>

  
      <div className="container second">
      <div className="row" style={{marginTop: "10rem", paddingTop: "3rem",
          paddingBottom: "3rem",}} >
        <div className="column-33">
          <img src={pic2} alt="App" style={{ marginRight:"2rem" }} />
        </div>
        <div className="column-66">
          <h1 className="xlarge-font logocolor" style={{marginTop: "2rem"}}>
            <b >
              Online Banking Made
              <br />
              <span className="easier" style={{ fontSize: "5rem" }}>
                Easier!
              </span>{" "}
            </b>
          </h1>
          <h1 className="large-font" style={{ color: "black" }}>
            <b> Quantum Speed transactions!</b>
          </h1>
          <p>
            <span style={{ fontSize: "24px" }}>
              Our pattened revolutionsry new way in mobile banking.
            </span>{" "}
            Quantum speed computing to propell your finances, incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <Link
            to
            className="btn btn-primary fs-2 Link"
            style={{ borderRadius: "0px" }}
          >
            Read More
          </Link>
        </div>
      </div>
      </div>

      <div className="container third">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font logocolor">
              <b>The Mobile App</b>
            </h1>
            <h1 className="large-font" style={{ color: "black" }}>
              <b className="xlarge-font logocolor2">Easy. Fast. Secured. </b>
            </h1>
            <p>
              <span className="large-font" style={{fontWeight:"bold"}}>
                Lightspeed Banking & <br />Investments
              </span>{" "}
              <br />
              You should use our app because lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
            <Link
              to
              className="btn btn-primary fs-2 Link greenLink"
              style={{ borderRadius: "0px" }}
            >
              Download the App
            </Link>
          </div>
          <div className="column-33">
            <img
              src={pic3}
              alt="33"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
