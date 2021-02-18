import * as React from "react";
import styled from "styled-components";
import { CompanyHeader } from "../companyHeader";
import { Employees } from "../employees";
import { EmployeeProfileModal } from "../employeeProfileModal";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <CompanyHeader />
      <Employees></Employees>
      <EmployeeProfileModal></EmployeeProfileModal>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;
