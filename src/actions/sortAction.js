export const SORT_ACTION = "SORT_ACTION";

export function sortAction(sortValue, isSortForward) {
  return {
    type: SORT_ACTION,
    sortValue: sortValue,
    isSortForward: isSortForward
  };
}
