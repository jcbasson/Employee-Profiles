import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { MockedProvider } from "@apollo/react-testing";
import { GET_EMPLOYEES_QUERY, EmployeesUI } from "./Employees";
import { EmployeesHeader } from "./styled";
import wait from "waait";
import { act } from "react-dom/test-utils";
import { EmployeeCard } from "../employeeCard";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Components::Employees", () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      employees: {
        selected: "someEmployeeId"
      }
    });
  });
  const setup = async mockOverrides => {
    const mocks = [
      mockOverrides
        ? mockOverrides
        : {
            request: {
              query: GET_EMPLOYEES_QUERY
            },
            result: {
              data: {
                employees: [
                  {
                    id: "90f3e8cc-7a81-4de6-9c9e-c55f88936a40",
                    avatar:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
                    firstName: "Ellie",
                    lastName: "Scott",
                    jobTitle: "Lead Assurance Director",
                    age: 42,
                    bio:
                      "Tenetur commodi aspernatur et qui rerum. Harum et itaque unde dolorem tempora aperiam quos. Animi sunt ab nemo magni sit fugit optio rerum et. Dolorum vel aliquam dolorem amet perferendis ab sed consequatur.",
                    dateJoined: "2016-02-07T16:35:07.687Z"
                  },
                  {
                    id: "ac81ae8b-516e-4888-8bb5-e85741bc406c",
                    avatar:
                      "https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg",
                    firstName: "Claire",
                    lastName: "Fahey",
                    jobTitle: "Investor Directives Officer",
                    age: 60,
                    bio:
                      "Architecto rem qui sunt quae architecto ea cum doloremque iste. Ratione reiciendis odio et quam repellat impedit tempore id. Iusto temporibus qui quidem facilis consectetur velit repellat. Illo delectus debitis dicta exercitationem. Voluptatem enim sed nihil quam. Corrupti cum et consequatur officia ut dolor odit.",
                    dateJoined: "2018-06-29T12:55:51.889Z"
                  }
                ]
              }
            }
          }
    ];

    const component = mount(
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <EmployeesUI selectEmployee={() => {}} />
        </MockedProvider>
      </Provider>
    );

    await wait();
    component.update();
    return component;
  };

  describe("render:", () => {
    it("should render employees header", async () => {
      await act(async () => {
        const wrapper = await setup();
        expect(wrapper.find(EmployeesHeader).exists()).toEqual(true);
        expect(wrapper.find(EmployeesHeader).text()).toEqual("Our Employees");
      });
    });

    it("should render the same amount of EmployeeCards as there are employees", async () => {
      await act(async () => {
        const wrapper = await setup();
        expect(wrapper.find(EmployeeCard).exists()).toEqual(true);
        expect(wrapper.find(EmployeeCard).length).toEqual(2);
      });
    });
  });
});
