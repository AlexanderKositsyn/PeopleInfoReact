import React, { Component } from "react";

export default class PeopleFilterTableHeadCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data
    };
  }
  render() {
    let { title } = this.state;
    return (
      <th className="people-info__table-header">
        {title}
        <div className="people-info__previous-next" data-sort={title} />
      </th>
    );
  }
}
