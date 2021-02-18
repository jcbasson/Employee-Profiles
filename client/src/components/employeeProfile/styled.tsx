import styled from "styled-components";

export const EmployeeProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 300px;
  padding: 30px 30px 40px 30px;
  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: 2fr 6fr;
    height: 100%;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 780px) {
    padding-right: 15px;
  }
  margin-bottom: 10px;
`;

export const ColumnRight = styled.div`
  @media (min-width: 780px) {
    padding-left: 15px;
  }
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  object-fit: contain;
  margin-bottom: 15px;
`;

export const JobTitle = styled.span`
  font-weight: bold;
  line-height: 25px;
`;

export const Age = styled.span`
  line-height: 25px;
`;

export const DateJoined = styled.span`
  line-height: 25px;
`;

export const FullName = styled.span`
  font-size: 16px;
  border-bottom: 2px solid grey;
  padding-bottom: 4px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  @media (min-width: 780px) {
    height: 123px;
    font-size: 24px;
  }
`;

export const JobDescription = styled.p``;
