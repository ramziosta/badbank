import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import Card from "../components/context";
import { UserContext } from "../components/context";
import { NavLink, Link } from "react-router-dom";
import LoginLogoutButton from "../components/LoginLogoutButton";
import { Row, Col } from "react-bootstrap";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";

// --------------REGEX Form Validation-----------------
//> username must start with a lower or upper case letter then followed by 3 to 23 charecters: lower or upper case letters , digits hyphen or underscore
//< password must have at least one character, lowercase letter, one uppercase letter, one digit, one special charechter between 8 and 24 charechters
//! need to add email validation explanition to REGEX....invalid email format

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// adds a timestamp to the user activity
export const timeStamp = new Date().toLocaleDateString();
console.log("⏰ " + timeStamp);

function CreateAccount() {
  const userRef = useRef();
  const errRef = useRef();

  // sets and validates the username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // sets and validates the email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // sets and validates the paassword
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // sets and validates the confirm password
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // sets the error messages or success messages ==> need to be used/assigned a function
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // shows and hids part of the screen
  const [show, setShow] = useState(true);

  //sets the status. use for user status/account status ==> need to be used/assigned a function
  const [status, setStatus] = useState("");

  const ctx = useContext(UserContext);

  // sets the focus when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // applies REGEX to validate the username . it will reloads when the user name changes
  useEffect(() => {
    setValidName(USER_REGEX.test(user));

    console.log("👽" + user);
  }, [user]);

  // applies REGEX to validate the email. it will reloads when the email changes
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));

    console.log("📨" + email);
  }, [email]);

  // applies REGEX to validate the password and passwordMatch . it will reloads when the  new password, and confirmation entered
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log("🤔" + result);
    console.log("🤫 " + pwd);
    setValidPwd(result);

    // checks the password and confirmation
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // removes any error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  //checks if account exist by checking id email exists
  function checkAccountExist(email) {
    let account = ctx.users.filter((item) => item.email === email);
    return account.length;
  }

  //> the function fires when the user hits submit button on the form
  //! ------ info for creating the account gathered here and structured here, we can add more fields and add more values to UserContext and  appropriate "ctx.value" needed from those fields and more state and functions as needed: like address, phone number, birthdate, etc ---------

  function createAccount() {
    // checks if the user entered the incorrect information for each field sets the login status to false => no account access
    if (!validName || !validEmail || !validPwd || !validMatch) {
      ctx.register = false;
      return;
    }
    // if the user tries to create an account and email exist
    if (checkAccountExist(email) > 0) {
      errMsg("User or email account already exist. Please login to your accout or use a different email address to register a new account.");
      setTimeout(() => setErrMsg(""), 3000);
      return;
    }

    // tracks and saves the activities with time stamp
    ctx.actions.push({
      user,
      email,
      pwd,
      created: timeStamp,
      stamp: timeStamp,
    });

    // tracks and saves user information and balance
    ctx.users.push({ user, email, pwd, balance: 500, created: timeStamp });
    setShow(false);
    ctx.register = true; //> this will be used in accountregister
    clearForm();
  }
  //!-----------------------------------------------------

  
  function clearForm() {
    setUser("");
    setEmail("");
    setPwd("");
    setMatchPwd("");
  }

  return (
    <>
      {show ? (
        <>
         <div className="creataccountform">
            
            <div className="bg-img">
              {success ? (
                <section>
                  <h1>Success!</h1>
                  <p>
                    <a href="#SignIn">Sign In</a>
                  </p>
                </section>
              ) : (

                <section className="registrationForm">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <h4 className="formId">Register A New BadBank Account</h4>
                  <form
                    onSubmit={() => {
                      createAccount();
                      clearForm();
                    }}
                  >
                    <label htmlFor="username">
                      Username:
                      <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                    {/* //<############################## */}
                    <label htmlFor="email">
                      Email:
                      <span className={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span
                        className={validEmail || !email ? "hide" : "invalid"}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        emailFocus && email && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Invalid email format.
                      <br />
                      Please enter a valid email address.
                      <br />
                      ex. example@email.com
                      <br />
                    </p>
                    {/* //<############################## */}
                    <label htmlFor="password">
                      Password:
                      <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>

                    <label htmlFor="confirm_pwd">
                      Confirm Password:
                      <span
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      value={matchPwd}
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>

                    <button
                    
                      disabled={
                        !validName || !validEmail || !validPwd || !validMatch
                          ? true
                          : false
                      }
                    >
                      Sign Up
                    </button>
                  </form>
                  <p>
                    Already Registered?
                    <br />
                    <Link to="/login" className="formLogin">
                      Login To Your Account.
                    </Link>
                  </p>
                </section>
            
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* //<############################## */}
          <div className="fs-1 mt-4 text-center">
            <h4>Your account has been created successfully.
            <br />
             Please Login to access your
             account.</h4>
          </div>
          <Card
            style={{ maxWidth: "25rem", marginTop: "2rem", backgroundColor:"rgba(108, 108, 108, 0.4)", width: "100%", maxWidth: "420px", minHeight: "400px", display: "flex",
              flexDirection: "column", justifyContent: "flex-start", padding: "1rem" }}
            header="Create Account"
            status={status}
            body={
              <>
                <h5 className="fs-2">Success</h5>
                <Link to="/login"  className="btn btn-primary fs-2 Link"
                style={{ borderRadius: "0px", marginTop: "4rem" }}>
                 LogIn
                </Link>
                <br />
                <h5>Open New Savings Account</h5>
                <Link
                to="/createaccount"
                className="fs-2 Link"
                style={{ borderRadius: "0px" }}
              >
                Create an Account
              </Link>
              </>
            }
          />
        </>
      )}
    </>
  );
}

export default CreateAccount;
