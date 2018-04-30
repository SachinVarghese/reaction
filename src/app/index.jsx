import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { AppContainer } from "react-hot-loader";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
};

render(Routes);

if (module.hot) {
  module.hot.accept("./routes", () => {
    render(Routes);
    render(require("./routes"));
  });
}
