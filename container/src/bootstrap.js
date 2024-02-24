import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useHistory } from "react-router-dom";

// const history = useHistory();
// console.log("history: ", history);

ReactDOM.render(<App history={useHistory} />, document.querySelector("#root"));
