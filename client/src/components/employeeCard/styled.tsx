import styled from "styled-components";

export const CardContent = styled.article<{ isSelected: boolean }>`
  width: 100%;
  height: 128px;
  display: flex;
  border: 1px solid #000000;
  background-color: ${({ isSelected }) => (isSelected ? "#ff6500" : "#ffffff")};
  cursor: pointer;
`;

export const Avatar = styled.img`
  object-fit: contain;
`;

export const EmployeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 10px;
`;

export const EmployeeFullName = styled.h2`
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
`;

//TODO: Find a way to ellipse when the content overflows
export const EmployeeBio = styled.p`
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 75px;
  text-align: justify;
  padding-right: 1em;
  font-size: 0.8em;

:before {
  content: '...';
  position: absolute;
  right: 0;
  bottom: 0;
}

:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
`;
