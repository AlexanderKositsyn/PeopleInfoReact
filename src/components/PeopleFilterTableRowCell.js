import React, { Component } from "react";

export default class PeopleFilterTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCell: this.props.data,
      key: this.props.key
    };
  }
  render() {
    let { dataCell } = this.state;

    return (
      <td className="people-info__table-cell" data-sort="{key}">
        {dataCell}
      </td>
    );
  }
}
