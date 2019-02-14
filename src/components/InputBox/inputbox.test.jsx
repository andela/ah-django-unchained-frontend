import React from "react";
import { shallow } from "enzyme";
import InputBox from "./";

describe("InputBox", () => {
  it("should be defined", () => {
    expect(InputBox).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = shallow(
        <InputBox
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="col-sm-6"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
