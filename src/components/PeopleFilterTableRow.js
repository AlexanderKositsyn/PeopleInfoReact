import React, { Component } from "react";
import PeopleFilterTableRowCell from "./PeopleFilterTableRowCell";

export default class PeopleFilterTableRow extends Component {
  render() {
    let dataRow = this.props.data;
    // генерирууем td-шки в строке из dataRow
    let cellArray = [];
    for (let key in dataRow) {
      cellArray.push(
        <PeopleFilterTableRowCell key={key} dataKey={key} data={dataRow[key]} />
      );
    }

    return <tr className="people-info__table-row">{cellArray}</tr>;
  }
}
