import React, { Component } from "react";
import HeadCell from "./HeadCell";

export default class HeadRow extends Component {
  render() {
    // Возьмем первый объект в data
    const headerObject = this.props.data;

    // Генерим список th и потом вставим их в таблицу
    const headerCells = [];
    for (let key in headerObject) {
      headerCells.push(<HeadCell key={key} title={key} />);
    }
    return (
      <tr
        className="people-info__table-row people-info__table-row--header"
        onClick={this.props.onClick}
      >
        {headerCells}
      </tr>
    );
  }
}
