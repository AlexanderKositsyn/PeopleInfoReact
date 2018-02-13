import React, { Component } from "react";
import PeopleFilterTableRowCell from "./PeopleFilterTableRowCell";

export default class PeopleFilterTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRow: this.props.data
    };
  }

  render() {
    let { dataRow } = this.state;
    // генерирууем td-шки в строке из dataRow
    let cellArray = [];
    for (let key in dataRow) {
      cellArray.push(
        <PeopleFilterTableRowCell key={key} data={dataRow[key]} />
      );
    }

    return <tr className="people-info__table-row">{cellArray}</tr>;
  }
}
