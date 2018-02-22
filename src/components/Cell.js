import React, { Component } from "react";

export default class Cell extends Component {
  render() {
    let dataCell = this.props.data,
      dataKey = this.props.dataKey;

    return (
      <td className="people-info__table-cell" data-sort={dataKey}>
        {dataCell}
      </td>
    );
  }
}
