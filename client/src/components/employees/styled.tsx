import styled from "styled-components";

export const EmployeesContainer = styled.div`
  padding: 40px 20px;
`;

export const EmployeeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 40px;
  padding: 15px 0;
`;

export const EmployeesHeader = styled.h2`
  font-size: 20px;
`;

export const LayoutDivider = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #bababa;
  height: 2px;
`;
