import { App } from "./app";
import { employeeReducer } from "./employees";

const reducers = {
  employees: employeeReducer
};
export { App, reducers };
