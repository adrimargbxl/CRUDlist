import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Title from "../components/Title";
configure({ adapter: new Adapter() });

describe("Title", () => {
  it("renders a div element", () => {
    const titleWrapper = shallow(<Title />);
    const titleDivs = titleWrapper.find("div");
    expect(titleDivs).toHaveLength(1);
  });
});
