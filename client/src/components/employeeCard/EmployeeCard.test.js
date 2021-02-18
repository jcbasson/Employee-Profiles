import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import sinon from "sinon";
import { EmployeeCard } from "./EmployeeCard";
import { Avatar, EmployeeFullName, EmployeeBio } from "./styled";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("Components::EmployeeCard", () => {
  const mockStore = configureMockStore();
  let store;
  beforeEach(() => {
    store = mockStore({
      employees: {
        selected: "someEmployeeId"
      }
    });
  });
  const setup = propOverrides => {
    const clickHandler = sinon.spy();
    const props = {
      employee: {
        id: "90f3e8cc-7a81-4de6-9c9e-c55f88936a40",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
        firstName: "Ellie",
        lastName: "Scott",
        bio:
          "Tenetur commodi aspernatur et qui rerum. Harum et itaque unde dolorem tempora aperiam quos. Animi sunt ab nemo magni sit fugit optio rerum et. Dolorum vel aliquam dolorem amet perferendis ab sed consequatur."
      },
      clickHandler,
      ...propOverrides
    };
    const wrapper = mount(
      <Provider store={store}>
        <EmployeeCard {...props} />
      </Provider>
    );

    return {
      wrapper,
      clickHandler
    };
  };

  describe("render:", () => {
    it("should render the employee avatar", () => {
      const { wrapper } = setup();
      expect(wrapper.find(Avatar).exists()).toEqual(true);
      expect(wrapper.find(Avatar).prop("src")).toEqual(
        "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg"
      );
    });

    it("should render the employee full name", () => {
      const { wrapper } = setup();
      expect(wrapper.find(EmployeeFullName).exists()).toEqual(true);
      expect(wrapper.find(EmployeeFullName).text()).toEqual("Ellie Scott");
    });

    it("should render the employee bio", () => {
      const { wrapper } = setup();
      expect(wrapper.find(EmployeeBio).exists()).toEqual(true);
      expect(wrapper.find(EmployeeBio).text()).toEqual(
        "Tenetur commodi aspernatur et qui rerum. Harum et itaque unde dolorem tempora aperiam quos. Animi sunt ab nemo magni sit fugit optio rerum et. Dolorum vel aliquam dolorem amet perferendis ab sed consequatur."
      );
    });
  });

  describe("action:", () => {
    it("should call the click handler when the card is clicked", () => {
      const { wrapper, clickHandler } = setup();
      wrapper.simulate("click");

      sinon.assert.calledOnce(clickHandler);
    });
  });
});
