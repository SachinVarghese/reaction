import React from "react";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="full-size d-flex-center">
      <Button variant="raised" color="primary">
        <Link to="/login">Code Vitae</Link>
      </Button>
    </div>
  );
};

export default Main;
