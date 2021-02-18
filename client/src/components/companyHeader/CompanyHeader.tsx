import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import {
  CompanyHeaderContainer,
  CompanyName,
  CompanyAdditionalInfoContainer,
  CompanyMotto,
  CompanyEst
} from "./styled";
import { formatISOZDate } from "../../utils/datetimeUtils";

export const GET_COMPANY_INFO_QUERY = gql`
  query CompanyInfo {
    companyInfo {
      companyName
      companyMotto
      companyEst
    }
  }
`;

export const CompanyHeader: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COMPANY_INFO_QUERY);

  //TODO: Implement proper placeholder to display while waiting for data
  if (loading) return null;
  //TODO: Implement proper error component
  if (error) return <h2>Error!</h2>;

  const { companyName, companyMotto, companyEst } = _.get(data, "companyInfo", {
    companyName: "Becker - Becker",
    companyMotto: "mission-critical harness functionalities",
    companyEst: "2016-04-29T23:20:52.285Z"
  });

  return (
    <CompanyHeaderContainer>
      <CompanyName data-id="companyName">{companyName}</CompanyName>
      <CompanyAdditionalInfoContainer>
        <CompanyMotto data-id="companyMotto">{companyMotto}</CompanyMotto>
        <CompanyEst data-id="companyEst">
          Since {formatISOZDate(companyEst)}
        </CompanyEst>
      </CompanyAdditionalInfoContainer>
    </CompanyHeaderContainer>
  );
};
