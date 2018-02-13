import React, { Component } from "react";
import "./PeopleFilter.css";
import PeopleFilterTableHeadCell from "./components/PeopleFilterTableHeadCell.js";
import PeopleFilterTableRow from "./components/PeopleFilterTableRow";

class PeopleFilter extends Component {
  // для сохранения состояний создадим в компоненте App state в котором и будет содержаться состояние всего приложения
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      searchInputValue: "",
      sortValue: "",
      isSortForward: void 0,
      paginatioValue: 1
    };
  }

  render() {
    console.log(this);
    const { data } = this.state;
    // Возьмем первый объект в data
    const headerObject = this.state.data[0];
    // Генерим список th и потом вставим их в таблицу
    const headerCells = [];
    for (let key in headerObject) {
      headerCells.push(<PeopleFilterTableHeadCell key={key} data={key} />);
    }

    // Гененрим все строки данных таблицы
    const tableRows = [];
    for (let i = 0; i < data.length; i++) {
      tableRows.push(<PeopleFilterTableRow key={i} data={data[i]} />);
    }

    console.log(tableRows);

    return (
      <div className="people-info" id="people-info">
        <div className="people-info__search">
          <label className="people-info__search-label">
            Search
            <input type="text" className="people-info__search-input" />
          </label>
          <button className="people-info__search-button">search</button>
        </div>
        <table className="people-info__table">
          <tbody>
            <tr className="people-info__table-row people-info__table-row--header">
              {headerCells}
            </tr>
            {tableRows}
          </tbody>
        </table>
        <div className="people-info__pagination">
          <button className="people-info__previous">Previous</button>
          <ul className="people-info__pagination-list">
            <li className="people-info__pagination-item active">
              <button className="people-info__pagination-button">1</button>
            </li>
            <li className="people-info__pagination-item">
              <button className="people-info__pagination-button">2</button>
            </li>
          </ul>
          <button className="people-info__next">Next</button>
        </div>
      </div>
    );
  }
}

export default PeopleFilter;
