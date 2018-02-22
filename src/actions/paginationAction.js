export const PAGINATION_ACTION = "PAGINATION_ACTION";

export function paginationAction(paginatioValue) {
  return {
    type: PAGINATION_ACTION,
    paginatioValue: paginatioValue
  };
}
