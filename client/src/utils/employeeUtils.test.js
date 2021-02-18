import {
  makeIsSelectedEmployee,
  makeIsEmployeeSelected
} from "./employeeUtils";

describe("Utils::EmployeeUtils", () => {
  const setup = stateOverrides => {
    const state = {
      employees: {
        selected: "randomId"
      },
      ...stateOverrides
    };
    return {
      state
    };
  };

  describe("makeIsSelectedEmployee", () => {
    it("should return false if the selected employee id does not match the employee id provided", () => {
      const isSelectedEmployee = makeIsSelectedEmployee();

      const { state } = setup();

      const result = isSelectedEmployee(state, "someOtherId");

      expect(result).toEqual(false);
    });

    it("should return true if the selected employee id does not match the employee id provided", () => {
      const isSelectedEmployee = makeIsSelectedEmployee();

      const { state } = setup();

      const result = isSelectedEmployee(state, "randomId");

      expect(result).toEqual(true);
    });
  });

  describe("makeIsEmployeeSelected", () => {
    it("should return true if no employee is selected", () => {
      const isEmployeeSelected = makeIsEmployeeSelected();

      const { state } = setup();

      const result = isEmployeeSelected(state);

      expect(result).toEqual(true);
    });

    it("should return false if an employee is selected", () => {
      const isEmployeeSelected = makeIsEmployeeSelected();

      const { state } = setup({
        employees: {
          selected: null
        }
      });

      const result = isEmployeeSelected(state);

      expect(result).toEqual(false);
    });
  });
});
