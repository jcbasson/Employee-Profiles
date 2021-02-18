import { createSelector } from "reselect";
import { IState } from "../types";
import _ from "lodash";

export const makeIsSelectedEmployee = () =>
  createSelector(
    (state: IState): string | null => state.employees.selected,
    (_: any, employeeId: string): string => employeeId,
    (selectedEmployeeId: string | null, employeeId: string): boolean =>
      employeeId === selectedEmployeeId
  );

export const makeIsEmployeeSelected = () =>
  createSelector(
    (state: IState): string | null => state.employees.selected,
    (employeeId: string | null): boolean => !_.isNil(employeeId)
  );
