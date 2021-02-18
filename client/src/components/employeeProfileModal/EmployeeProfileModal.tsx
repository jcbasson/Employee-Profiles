import * as React from "react";
import { ModalPortal } from "../utility/modal";
import { EmployeeProfile } from "../employeeProfile";
import { IState } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { makeIsEmployeeSelected } from "../../utils/employeeUtils";
import { setSelectedEmployee } from "../employees";

export const EmployeeProfileModal: React.FC = () => {
  const isEmployeeSelected = React.useMemo(makeIsEmployeeSelected, []);

  const isSelected = useSelector((state: IState): boolean =>
    isEmployeeSelected(state)
  );
  const dispatch = useDispatch();

  const unselectEmployee = React.useCallback(
    () => dispatch(setSelectedEmployee(null)),
    [dispatch]
  );

  return (
    <>
      {isSelected && (
        <ModalPortal clickHandler={unselectEmployee}>
          <EmployeeProfile></EmployeeProfile>
        </ModalPortal>
      )}
    </>
  );
};
