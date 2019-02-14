import React from "react";
import { shallow } from "enzyme";
import Button from "./";

describe("Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = shallow(
      <Button
        type="submit"
        className="col-sm-6 btn btn-success form-control"
        text="login"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
