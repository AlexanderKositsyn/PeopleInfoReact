import React, { Component } from "react";

export default class PeopleFilterPaginationButton extends Component {
  render() {
    let number = this.props.number,
      paginatioValue = this.props.paginatioValue;

    return (
      <li
        className={
          "people-info__pagination-item " +
          (paginatioValue === number ? "active" : "")
        }
      >
        <button className="people-info__pagination-button">{number}</button>
      </li>
    );
  }
}
