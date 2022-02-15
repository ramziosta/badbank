import { useState, useContext } from "react";
import { UserContext } from "./context";
import LoginLogoutButton from "./LoginLogoutButton";
import { Link } from "react-router-dom";
import "./siteSideBar.css";
export default function SiteSideBar() {
const ctx = useContext(UserContext);

  return (
    <div className="sidebar">
      {/* <h6>{ctx.users[0].user}</h6> */}
      <Link
        to="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        to="/deposit"
      >
        Deposit
      </Link>
      <Link
        to="/withdraw"
      >
        Withdraw
      </Link>
      <Link
        to="/alldata"
      >
        Users
      </Link>
      <LoginLogoutButton />
    </div>
  );
}
