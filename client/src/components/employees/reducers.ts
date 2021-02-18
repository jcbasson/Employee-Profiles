import { SET_SELECTED } from "./actions";

const defaultState = {
  selected: null
};

export const employeeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_SELECTED:
      return { ...state, selected: action.employeeId };
    default:
      return state;
  }
};
