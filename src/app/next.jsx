import React from "react";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const Next = () => {
  return (
    <Button variant="raised" color="primary">
      <Link to="/">Home</Link>
    </Button>
  );
};

export default Next;
