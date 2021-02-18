import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import {
  EmployeesContainer,
  EmployeesHeader,
  EmployeeCards,
  LayoutDivider
} from "./styled";
import { EmployeeCard } from "../employeeCard";
import { IEmployee } from "../../types";
import { connect } from "react-redux";
import { setSelectedEmployee } from "./actions";
import { Dispatch } from "redux";

export const GET_EMPLOYEES_QUERY = gql`
  query Employees {
    employees {
      id
      avatar
      firstName
      lastName
      jobTitle
      age
      bio
      dateJoined
    }
  }
`;

interface IEmployees {
  selectEmployee: (employeeId: string) => () => void;
}

export const EmployeesUI: React.FC<IEmployees> = ({ selectEmployee }) => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES_QUERY);

  //TODO: Implement proper placeholder to display while waiting for data
  if (loading) return null;
  //TODO: Implement proper error component
  if (error) return <h2>Error!</h2>;

  const employees = _.get(data, "employees", []);

  return (
    <EmployeesContainer>
      <EmployeesHeader>Our Employees</EmployeesHeader>
      <LayoutDivider></LayoutDivider>
      <EmployeeCards>
        {employees.map((employee: IEmployee) => (
          <EmployeeCard
            key={employee.id}
            clickHandler={selectEmployee(employee.id)}
            employee={employee}
          />
        ))}
      </EmployeeCards>
    </EmployeesContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    selectEmployee: (employeeId: string) => () =>
      dispatch(setSelectedEmployee(employeeId))
  };
};

export const Employees = connect(
  () => {},
  mapDispatchToProps
)(EmployeesUI);
