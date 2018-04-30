import React from "react";
import Button from "material-ui/Button";
import "../styles/main.scss";
import Icon from "../assets/me.jpeg";
import { hot } from "react-hot-loader";

const Main = () => {
  return (
    <Button variant="raised" color="primary">
      Code Vitae!
    </Button>
  );
};

export default hot(module)(Main);
