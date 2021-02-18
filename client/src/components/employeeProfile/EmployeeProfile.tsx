import * as React from "react";
import { withApollo } from "react-apollo";
import { useSelector } from "react-redux";
import { IState } from "../../types";
import { formatISOZDate } from "../../utils/datetimeUtils";
import {
  EmployeeProfileContainer,
  ColumnLeft,
  ColumnRight,
  Avatar,
  JobTitle,
  DateJoined,
  Age,
  FullName,
  JobDescription
} from "./styled";
import gql from "graphql-tag";
import _ from "lodash";

//TODO: Find client type
interface IEmployeeProfile {
  client: any;
}

const EmployeeProfileUI: React.FC<IEmployeeProfile> = ({ client }) => {
  const selectedEmployeeId = useSelector((state: IState): boolean =>
    _.get(state, "employees.selected")
  );

  const employee = client.readFragment({
    id: selectedEmployeeId,
    fragment: gql`
      fragment employee on employees {
        id
        avatar
        firstName
        lastName
        jobTitle
        age
        bio
        dateJoined
      }
    `
  });

  return _.isNil(employee) ? (
    <>
      <h2>Not information available</h2>
    </>
  ) : (
    <EmployeeProfileContainer>
      <ColumnLeft>
        <Avatar src={employee.avatar} />
        <JobTitle>{employee.jobTitle}</JobTitle>
        <Age>{employee.age}</Age>
        <DateJoined>{formatISOZDate(employee.dateJoined)}</DateJoined>
      </ColumnLeft>
      <ColumnRight>
        <FullName>
          {employee.firstName} {employee.lastName}
        </FullName>
        <JobDescription>{employee.bio}</JobDescription>
      </ColumnRight>
    </EmployeeProfileContainer>
  );
};

export const EmployeeProfile = withApollo(EmployeeProfileUI);
