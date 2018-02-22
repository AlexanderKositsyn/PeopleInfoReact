import React, { Component } from "react";
import Cell from "./Cell";

export default class TableRow extends Component {
  render() {
    let dataRow = this.props.data;
    // генерирууем td-шки в строке из dataRow
    let cellArray = [];
    for (let key in dataRow) {
      cellArray.push(<Cell key={key} dataKey={key} data={dataRow[key]} />);
    }

    return <tr className="people-info__table-row">{cellArray}</tr>;
  }
}
