import React, { Component } from "react";
import PaginationButton from "./PaginationButton";

export default class PaginationList extends Component {
  render() {
    //генерируем элементы в пагинацию
    let paginationButtonArray = [];
    for (let i = 1; i <= this.props.amoutPagination; ++i) {
      paginationButtonArray.push(
        <PaginationButton
          key={i}
          number={i}
          paginatioValue={this.props.paginatioValue}
        />
      );
    }
    return (
      <ul className="people-info__pagination-list" onClick={this.props.onClick}>
        {paginationButtonArray}
      </ul>
    );
  }
}
