import React from "react";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Button variant="raised" color="primary">
      <Link to="/next">Code Vitae</Link>
    </Button>
  );
};

export default Main;
