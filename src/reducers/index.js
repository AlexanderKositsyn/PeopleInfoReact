import { INPUT_ACTION } from "../actions/inputAction.js";
import { PAGINATION_ACTION } from "../actions/paginationAction";

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
  return state;
}
