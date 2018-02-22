import { INPUT_ACTION } from "../actions/inputAction.js";
import { PAGINATION_ACTION } from "../actions/paginationAction";
import { SORT_ACTION } from "../actions/sortAction";

export default function(state, action) {
  if (action.type === INPUT_ACTION) {
    return Object.assign({}, state, {
      searchInputValue: action.inputValue,
      paginatioValue: action.paginatioValue
    });
  }
  if (action.type === PAGINATION_ACTION) {
    return Object.assign({}, state, {
      paginatioValue: action.paginatioValue
    });
  }
  if (action.type === SORT_ACTION) {
    return Object.assign({}, state, {
      sortValue: action.sortValue,
      isSortForward: action.isSortForward
    });
  }
  return state;
}
