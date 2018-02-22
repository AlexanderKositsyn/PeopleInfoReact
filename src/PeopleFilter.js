import React, { Component } from "react";
import PeopleFilterTableHeadCell from "./components/PeopleFilterTableHeadCell.js";
import PeopleFilterTableRow from "./components/PeopleFilterTableRow";
import PeopleFilterPaginationButton from "./components/PeopleFilterPaginationButton";
import { connect } from "react-redux";
import { inputAction } from "./actions/inputAction";
import { paginationAction } from "./actions/paginationAction";

class PeopleFilter extends Component {
  //обработчик на кнопки пагинации
  handlePaginationListButtons = e => {
    if (e.target.tagName === "BUTTON") {
      this.props.dispatch(paginationAction(parseInt(e.target.textContent, 10)));
    }
  };

  // обработчик на кпопку next в пагинации
  handlePaginationListNext = e => {
    if (e.target.tagName === "BUTTON") {
      this.state.paginatioValue !== this.state.amoutPagination
        ? this.setState({
            paginatioValue: this.state.paginatioValue + 1
          })
        : void 0;
    }
  };

  // обработчик на кпопку previous в пагинации
  handlePaginationListPrevious = e => {
    if (e.target.tagName === "BUTTON") {
      this.state.paginatioValue !== 1
        ? this.setState({
            paginatioValue: this.state.paginatioValue - 1
          })
        : void 0;
    }
  };

  // обработчик для инпута search
  handleInputSearch = e => {
    // изменяем состояние приложения
    // эта функция отправляет action в store
    this.props.dispatch(inputAction(e.target.value, 1));
  };

  //обработчик на кнопки sort
  handleTableHeader = e => {
    if (e.target.tagName === "DIV") {
      // сравниваем новое значение и старое значение
      if (
        this.state.sortValue === e.target.dataset.sort ||
        !this.state.sortValue
      ) {
        this.setState({
          isSortForward: !this.state.isSortForward
        });
      } else {
        this.setState({
          isSortForward: true
        });
      }
      this.setState({
        sortValue: e.target.dataset.sort
      });
    }
  };

  render() {
    console.log(this);
    // Возьмем первый объект в data
    const headerObject = this.props.data[0];
    // Генерим список th и потом вставим их в таблицу
    const headerCells = [];
    for (let key in headerObject) {
      headerCells.push(<PeopleFilterTableHeadCell key={key} data={key} />);
    }

    // сначала фильтруем data по состоянию приложения
    let filteredData = [];
    filteredData = this.props.data.filter(item => {
      //найдем совпадния в объекте
      let strOfValues = "";
      for (let key in item) {
        strOfValues += item[key];
      }
      return strOfValues.indexOf(this.props.searchInputValue) >= 0;
    });

    // если стоит сортировка, то сортируем согласно сортировке по определенной колонке
    // а значит формируем новый массив
    if (this.props.sortValue) {
      console.log(this.props.sortValue);
      let sortFunction = (a, b) => {
        //соханим значения
        let value1 = a[this.props.sortValue],
          value2 = b[this.props.sortValue];
        // если это валюта , то сравниваем другие строки
        if (typeof value1 === "string")
          if (value1.indexOf("$") >= 0 && value2.indexOf("$") >= 0) {
            value1 = parseFloat(value1.slice(1));
            value2 = parseFloat(value2.slice(1));
          }
        // если это дата , то сравниваем числа с начала Unix
        if (typeof value1 === "string")
          if (/\d+\//g.test(value1) && /\d+\//g.test(value2)) {
            value1 = new Date(value1).getTime();
            value2 = new Date(value2).getTime();
          }
        // ядро сравнения
        if (value1 > value2) {
          return 1;
        }
        if (value1 < value2) {
          return -1;
        }
        return 0;
      };
      // сортируем по значению из состояния приложения
      filteredData.sort(sortFunction);

      // если выключен флаг forward sort то , делаем обратную сортировку
      !this.props.isSortForward ? filteredData.reverse() : void 0;
    }
    console.log(filteredData);

    // Гененрим все строки данных таблицы
    // из нового, фильтрованного массива.
    // Генерация строк происходит для текущей пагинации в зависимоти от paginatioValue
    let tableRows = [];
    filteredData.map((item, index, array) => {
      if (
        index >= this.props.paginatioValue * 10 - 10 &&
        index <= this.props.paginatioValue * 10 - 1
      )
        return tableRows.push(<PeopleFilterTableRow key={index} data={item} />);

      return void 0;
    });

    // раскрасим таблицу в зависимости от выбанной сортировки
    let allCells = this.props.rootElement.querySelectorAll("td");
    for (let i = 1; i < allCells.length; ++i) {
      allCells[i].style.backgroundColor = "";
    }
    let column = this.props.rootElement.querySelectorAll(
      `[data-sort='${this.props.sortValue}']`
    );
    for (let i = 1; i < column.length; ++i) {
      i % 2
        ? (column[i].style.backgroundColor = "#F0E0E0")
        : (column[i].style.backgroundColor = "#F0F0F0");
    }
    this.amoutPagination = parseInt(filteredData.length / 10, 10) + 1;
    //генерированные элементы в пагинацию
    let paginationButtonArray = [];
    for (let i = 1; i <= this.amoutPagination; ++i) {
      paginationButtonArray.push(
        <PeopleFilterPaginationButton
          key={i}
          number={i}
          paginatioValue={this.props.paginatioValue}
        />
      );
    }

    // заменим на активный класс кнопку сортировки(это в заголвке таблицы)
    let headerRow = this.props.rootElement.querySelectorAll(
      ".people-info__previous-next"
    );
    if (this.props.isSortForward === true) {
      for (let i = 0; i < headerRow.length; ++i) {
        headerRow[i].classList.remove("forward");
        headerRow[i].classList.remove("reverse");
      }
      if (column.length) column[0].classList.add("forward");
    } else {
      for (let i = 0; i < headerRow.length; ++i) {
        headerRow[i].classList.remove("forward");
        headerRow[i].classList.remove("reverse");
      }
      if (column.length) column[0].classList.add("reverse");
    }

    return (
      <div className="people-info" id="people-info">
        <div className="people-info__search">
          <label className="people-info__search-label">
            Search
            <input
              type="text"
              className="people-info__search-input"
              onChange={this.handleInputSearch}
            />
          </label>
          <button className="people-info__search-button">search</button>
        </div>
        <table className="people-info__table">
          <tbody>
            <tr
              className="people-info__table-row people-info__table-row--header"
              onClick={this.handleTableHeader}
            >
              {headerCells}
            </tr>
            {tableRows}
          </tbody>
        </table>
        <div className="people-info__pagination">
          <button
            className="people-info__previous"
            onClick={this.handlePaginationListPrevious}
          >
            Previous
          </button>
          <ul
            className="people-info__pagination-list"
            onClick={this.handlePaginationListButtons}
          >
            {paginationButtonArray}
          </ul>
          <button
            className="people-info__next"
            onClick={this.handlePaginationListNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

// возвращаем обетку, которая будет соединять redux и react
// она определяет какие св ва из state попадут в пропсы компонента
// поэтому в компоненте мы будем иметь доступ к состоянию через props
export default connect(state => {
  return { ...state };
})(PeopleFilter);
