import styled from "styled-components";

export const CompanyHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 10px 20px 15px 20px;
  justify-content: center;
`;

export const CompanyName = styled.h1`
  font-size: 30px;
  line-height: 40px;
`;

export const CompanyAdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CompanyMotto = styled.h2`
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
  @media (max-width: 424px) {
    font-size: 9px;
  }
`;

export const CompanyEst = styled.h2`
  font-size: 12px;
  font-weight: bold;
  @media (max-width: 424px) {
    font-size: 9px;
  }
`;
