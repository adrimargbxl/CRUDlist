import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  email: string;
  name: string;
}

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators: {
    name: string | undefined;
    email: string;
  }[];
}

interface CollaboratorProp {
  name: string;
  email: string;
}

interface Props {
  projectItem: Projects;
  handleAddCollaborator: (id: string, value: CollaboratorProp) => void;
}

const ProjectSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required")
});

const AddCollaborator: React.FC<Props> = ({
  projectItem,
  handleAddCollaborator
}) => {
  const initialValues: MyFormValues = {
    name: "",
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
