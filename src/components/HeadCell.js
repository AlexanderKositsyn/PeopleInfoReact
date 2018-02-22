import React, { Component } from "react";

export default class HeadCell extends Component {
  render() {
    return (
      <th className="people-info__table-header">
        {this.props.title}
        <div
          className="people-info__previous-next"
          data-sort={this.props.title}
        />
      </th>
    );
  }
}
