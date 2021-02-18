import * as React from "react";
import { useSelector } from "react-redux";
import { IEmployee, IState } from "../../types";
import { makeIsSelectedEmployee } from "../../utils/employeeUtils";
import {
  CardContent,
  Avatar,
  EmployeeDetails,
  EmployeeFullName,
  EmployeeBio
} from "./styled";

interface IEmployeeCard {
  readonly employee: IEmployee;
  readonly clickHandler: any;
}

export const EmployeeCard: React.FC<IEmployeeCard> = ({
  employee,
  clickHandler
}) => {
  const isSelectedEmployee = React.useMemo(makeIsSelectedEmployee, []);

  const isSelected = useSelector((state: IState): boolean =>
    isSelectedEmployee(state, employee.id)
  );

  return (
    <CardContent isSelected={isSelected} onClick={clickHandler}>
      <Avatar src={employee.avatar} alt="avatar"></Avatar>
      <EmployeeDetails>
        <EmployeeFullName>
          {employee.firstName} {employee.lastName}
        </EmployeeFullName>
        <EmployeeBio>{employee.bio}</EmployeeBio>
      </EmployeeDetails>
    </CardContent>
  );
};
