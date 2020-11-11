import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Collaborator from "../components/Collaborator";
configure({ adapter: new Adapter() });

describe("Collaborator", () => {
  const mockID = "4";
  const mockFunction = jest.fn((x) => 42 + x);
  const mockProject = { name: "john", email: "john@doe.com," };
  it("should render one image div", () => {
    const collaboratorWrapper = shallow(
      <Collaborator
        handleDeleteCollaborator={mockFunction}
        projectID={mockID}
        projectItem={mockProject}
      />
    );
    const avatarImage = collaboratorWrapper.find("img");
    expect(avatarImage).toHaveLength(1);
  });
  it("should render email address", () => {
    const collaboratorWrapper = shallow(
      <Collaborator
        handleDeleteCollaborator={mockFunction}
        projectID={mockID}
        projectItem={mockProject}
      />
    );
    expect(
      collaboratorWrapper.contains(
        <div className="collaboratorDetails__email">{mockProject.email}</div>
      )
    ).toBeTruthy();
  });
  it("should activate delete button", () => {
    const onClickButton = jest.fn();
    const button = shallow(
      <div className="collaboratorDelete" onClick={onClickButton}>
        Delete
      </div>
    );
    button.find(".collaboratorDelete").simulate("click");
    expect(onClickButton).toHaveBeenCalledTimes(1);
  });
});
