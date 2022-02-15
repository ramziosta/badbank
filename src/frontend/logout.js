import { UserContext } from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import { useContext } from "react";
import { Row, Col } from "react-bootstrap";

function Logout() {
  const ctx = useContext(UserContext);
  return (
    <>
      <div className="text-end">{ctx.users[0].user}</div>
      <Row>
        <Col className="text-end">
          <LoginLogoutButton />
        </Col>
      </Row>
      <h1>You have succesfully logout</h1>
    </>
  );
}

export default Logout;
