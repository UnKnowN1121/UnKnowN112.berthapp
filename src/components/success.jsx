import React from "react";
import { Jumbotron } from "react-bootstrap";
const Success = () => {
  return (
    <>
      <div className=" row align-items-center mt-5">
        <Jumbotron className="col">
          <center>
            <span className="col fa fa-check-circle fa-5x "></span>
            <br></br>
            <h2>Success! Order Has been Placed</h2>
          </center>
        </Jumbotron>
      </div>
    </>
  );
};

export default Success;
