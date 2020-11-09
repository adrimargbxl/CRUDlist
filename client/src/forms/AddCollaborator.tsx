import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import "./AddCollaborator.css";
import { ProjectType, CollaboratorType } from "../types";

interface Props {
  projectItem: ProjectType;
  handleAddCollaborator: (id: string, value: CollaboratorType) => void;
}

const ProjectSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required")
});

const AddCollaborator: React.FC<Props> = ({
  projectItem,
  handleAddCollaborator
}) => {
  const initialValues: CollaboratorType = {
    name: "",
    email: ""
  };
  const addCollaboratorIcon: string = require("../assets/addCollaboratorFormButton.svg")
    .default;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProjectSchema}
      onSubmit={(values, actions) => {
        handleAddCollaborator(projectItem.id, values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="AddCollaboratorFormContainer">
            <div>
              <Field
                className="field__box__collaborator"
                placeholder="ex: firstname.lastname@provider.com"
                type="text"
                id="email"
                name="email"
              ></Field>
              {errors.email && touched.email ? (
                <div className="field__error">{errors.email}</div>
              ) : null}
            </div>

            <button className="collaboratorButton" type="submit">
              <img src={addCollaboratorIcon} alt="" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddCollaborator;
