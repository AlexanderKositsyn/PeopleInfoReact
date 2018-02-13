import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PeopleFilter from "./PeopleFilter";
import registerServiceWorker from "./registerServiceWorker";
import { data1, data2 } from "./data";

ReactDOM.render(<PeopleFilter data={data1} />, document.getElementById("root"));
registerServiceWorker();
