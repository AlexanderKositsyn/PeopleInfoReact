/// LIB
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
/// STYLE
import "./index.css";
/// MODULES
import PeopleFilter from "./components/PeopleFilter";
import registerServiceWorker from "./registerServiceWorker";
import { data1, data2 } from "./data";
import reducer from "./reducers";

const PeopleFilterStyled = styled.div`
  font-family: Helvetica, sans-serif;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .people-info__search {
    display: flex;
    margin-bottom: 10px;
  }

  .people-info__search-label {
    margin-left: auto;
  }
  .people-info__table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 10px;
    border-bottom: 2px #000 solid;
    margin-bottom: 30px;
  }

  .people-info__table-header {
    position: relative;
    padding-right: 20px;
    padding-bottom: 20px;
    text-align: left;
    padding-left: 20px;
  }
  .people-info__table-cell {
    padding: 10px;
  }
  .people-info__table-row {
    border-bottom: 1px solid gray;
  }
  .people-info__table-row:nth-child(2n) {
    background: #f0f0f0;
  }

  .people-info__table-row--header .people-info__table-header {
    border-bottom: 2px solid #000;
  }
  /* для иконки  */
  .people-info__previous-next {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
  }

  .people-info__previous-next:before {
    width: 0;
    height: 0;
    border-top: solid 5px transparent;
    border-bottom: solid 5px transparent;
    border-right: solid 5px grey;
    content: "";
    transform-origin: left;
    transform: rotate(-90deg);
    position: absolute;

    top: 55%;
    left: 50%;
    display: block;
  }
  .people-info__previous-next:after {
    transform: rotate(-90deg);
    transform-origin: left;
    top: 20%;
    left: 50%;

    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-top: solid 5px transparent;
    border-bottom: solid 5px transparent;
    border-left: solid 5px grey;
  }

  .people-info__previous-next.forward:after {
    display: none;
  }
  .people-info__previous-next.forward:before {
    border-right: solid 5px blue;
  }

  .people-info__previous-next.reverse:after {
    border-left: solid 5px blue;
  }
  .people-info__previous-next.reverse:before {
    display: none;
  }

  .people-info__pagination {
    padding-right: 20px;
    display: flex;
  }

  .people-info__previous {
    margin-left: auto;
    border: none;
    background-color: #fff;
    padding: 5px;
    margin-right: 10px;
  }
  .people-info__pagination-item {
    height: 100%;
    margin-right: 10px;
  }
  .people-info__pagination-item.active .people-info__pagination-button {
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
    background-color: buttonface;
    box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
  }

  .people-info__pagination-button {
    height: 100%;
    border: none;
    background-color: #fff;
  }

  .people-info__next {
    border: none;
    background-color: #fff;
    padding: 5px;
  }

  .people-info__pagination-list {
    display: flex;
  }
`;

let initialState = {
  data: data1,
  rootElement: document.getElementById("root"),
  searchInputValue: "",
  sortValue: "",
  isSortForward: undefined,
  paginatioValue: 1
};
//создаем store для redux
// нужно передать в него reducer-ы и если нужно начальное состояние приложения
let store = createStore(reducer, initialState);

//тут нужно связать react и redux(redux может использвоваться и не в react, а в обычном коде)
ReactDOM.render(
  <Provider store={store}>
    <PeopleFilterStyled>
      <PeopleFilter />
    </PeopleFilterStyled>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
