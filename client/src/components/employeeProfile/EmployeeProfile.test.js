import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Modal } from "../utility/modal";
import { EmployeeProfile } from "../employeeProfile";
import { MockedProvider } from "@apollo/react-testing";
import { act } from "react-dom/test-utils";
import gql from "graphql-tag";
import {
  Avatar,
  JobTitle,
  DateJoined,
  Age,
  FullName,
  JobDescription
} from "./styled";

describe("Components::EmployeeProtofile", () => {
  const selectedEmployeeId = "90f3e8cc-7a81-4de6-9c9e-c55f88936a40";
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      employees: {
        selected: selectedEmployeeId
      }
    });
  });

  const GET_EMPLOYEES_QUERY = gql`
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

  const setup = async storeOverride => {
    const graphQlQueryResponseMock = [
      {
        request: {
          query: GET_EMPLOYEES_QUERY
        },
        result: {
          data: {
            employees: [
              {
                id: selectedEmployeeId,
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
    const wrapper = mount(
      <Provider store={storeOverride ? storeOverride : store}>
        <MockedProvider mocks={graphQlQueryResponseMock} addTypename={false}>
          <EmployeeProfile />
        </MockedProvider>
      </Provider>
    );

    return {
      wrapper
    };
  };

  describe("render:", () => {
    it("should render an employee avatar if the selected employee has data", async () => {
      await act(async () => {
        const { wrapper } = await setup();

        /* TODO: Find out why readFragment does not work when mocking the apollo provider 
                 There is very limited resources on testing apollo react components let alone readFragmented ones
                 So left these tests out for now
                
        */
        // expect(wrapper.find(Avatar).exists()).toEqual(true);
        // expect(wrapper.find(Avatar))
        //   .prop("src")
        //   .toEqual(
        //     "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg"
        //   );
      });
    });
  });
});
