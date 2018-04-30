import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";

const render = Component =>
  ReactDOM.render(<Component />, document.getElementById("app"));

render(Main);
