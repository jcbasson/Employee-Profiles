export const SET_SELECTED = "SET_SELECTED";

export const setSelectedEmployee = (employeeId: string | null) => {
  return {
    type: SET_SELECTED,
    employeeId
  };
};
