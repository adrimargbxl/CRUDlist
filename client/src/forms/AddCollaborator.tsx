import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import faker from "faker";
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
    image: faker.image.avatar(),
    name: faker.name.findName(),
    email: ""
  };
  const addCollaboratorIcon: string = require("../assets/addCollaboratorFormButton.svg")
    .default;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={(values, actions) => {
          handleAddCollaborator(projectItem.id, values);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="field">
              <Field
                className="field__box email"
                placeholder="ex: firstname.lastname@provider.com"
                type="text"
                id="email"
                name="email"
              ></Field>
              {errors.email && touched.email ? (
                <div className="field__error">{errors.email}</div>
              ) : null}
            </div>

            <button type="submit">
              <img src={addCollaboratorIcon} alt="" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCollaborator;
