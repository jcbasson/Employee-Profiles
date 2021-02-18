import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { ModalPortal } from "./ModalPortal";

describe("Components::Utility::ModalPortal", () => {
  let container = null;
  beforeAll(() => {
    const div = document.createElement("div");
    div.id = "modal-root";
    container = document.body.appendChild(div);
  });

  it("should render the modal portal with it's content", async () => {
    const { getByText } = render(
      <ModalPortal>
        <div>Hi I should show</div>
      </ModalPortal>,
      { container }
    );

    await waitForElement(() => getByText(/Hi I should show/i));
  });
});
