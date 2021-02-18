import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { MockedProvider } from "@apollo/react-testing";
import { GET_COMPANY_INFO_QUERY, CompanyHeader } from "./CompanyHeader";
import { CompanyName, CompanyMotto, CompanyEst } from "./styled";
import wait from "waait";
import { act } from "react-dom/test-utils";

describe("Components::CompanyHeader", () => {
  const setup = async mockOverrides => {
    const mocks = [
      mockOverrides
        ? mockOverrides
        : {
            request: {
              query: GET_COMPANY_INFO_QUERY
            },
            result: {
              data: {
                companyInfo: {
                  companyName: "Test Company",
                  companyMotto: "Test Motto",
                  companyEst: "2016-04-29T23:20:52.285Z"
                }
              }
            }
          }
    ];

    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CompanyHeader />
      </MockedProvider>
    );

    await wait();
    component.update();
    return component;
  };

  describe("render:", () => {
    it("should render the company name", async () => {
      await act(async () => {
        const wrapper = await setup();
        expect(wrapper.find(CompanyName).exists()).toEqual(true);
        expect(wrapper.find(CompanyName).text()).toEqual("Test Company");
      });
    });

    it("should render the company motto", async () => {
      await act(async () => {
        const wrapper = await setup();
        expect(wrapper.find(CompanyMotto).exists()).toEqual(true);
        expect(wrapper.find(CompanyMotto).text()).toEqual("Test Motto");
      });
    });

    it("should render the company established date", async () => {
      await act(async () => {
        const wrapper = await setup();
        expect(wrapper.find(CompanyEst).exists()).toEqual(true);
        expect(wrapper.find(CompanyEst).text()).toEqual("Since 29/04/2016");
      });
    });
  });
});
