//это так называемый action creator

export const INPUT_ACTION = "INPUT_ACTION";

export function inputAction(value, paginatioValue) {
  return {
    type: INPUT_ACTION,
    inputValue: value,
    paginatioValue: paginatioValue
  };
}
