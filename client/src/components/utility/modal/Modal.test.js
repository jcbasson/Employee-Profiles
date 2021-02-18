import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import sinon from "sinon";
import { Modal } from "./Modal";
import { Overlay, ModalBox, ModalCloseButton } from "./styled";

describe("Components::Utility::Modal", () => {
  const setup = () => {
    const clickHandler = sinon.spy();

    const wrapper = mount(<Modal clickHandler={clickHandler} />);

    return {
      wrapper,
      clickHandler
    };
  };

  describe("render:", () => {
    it("should render an overlay", () => {
      const { wrapper } = setup();
      expect(wrapper.find(Overlay).exists()).toEqual(true);
    });

    it("should render the modal content box", () => {
      const { wrapper } = setup();
      expect(wrapper.find(ModalBox).exists()).toEqual(true);
    });

    it("should render the close button", () => {
      const { wrapper } = setup();
      expect(wrapper.find(ModalCloseButton).exists()).toEqual(true);
    });
  });

  describe("action:", () => {
    it("should call the click handler when the card is clicked", () => {
      const { wrapper, clickHandler } = setup();
      wrapper.find(Overlay).simulate("click");

      sinon.assert.calledOnce(clickHandler);
    });

    it("should call the click handler when the close button is clicked", () => {
      const { wrapper, clickHandler } = setup();
      wrapper.find(ModalCloseButton).simulate("click");

      sinon.assert.calledOnce(clickHandler);
    });

    it("should NOT call the click handler when the modal content box is clicked", () => {
      const { wrapper, clickHandler } = setup();
      wrapper.find(ModalBox).simulate("click");

      sinon.assert.notCalled(clickHandler);
    });
  });
});
