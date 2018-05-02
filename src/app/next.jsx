import React from "react";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const Next = () => {
  return (
    <div className="next">
      <Button variant="raised" color="secondary">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default Next;
