import React from "react";
import "./AddProject.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  id: string;
  name: string;
  enterprise: string;
  collaborators: {
    name: string;
    email: string;
  }[];
}

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators: {
    name: string;
    email: string;
  }[];
}

interface Props {
  handleSubmit: (value: Projects) => void;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  buttonText: string;
  projects?: Projects;
}

const ProjectSchema = Yup.object().shape({
  name: Yup.string().required("Cannot be blank"),
  enterprise: Yup.string().required("Cannot be blank")
});

const AddProject: React.FC<Props> = ({
  handleSubmit,
  setModalIsOpen,
  title,
  projects,
  buttonText
}) => {
  const closeIcon: string = require("../assets/close.svg").default;

  const initialValues: MyFormValues = {
    id: projects ? projects.id : "",
    name: projects ? projects.name : "",
    enterprise: projects ? projects.enterprise : "",
    collaborators: projects ? projects.collaborators : []
  };

  return (
    <div>
      <div className="addProjectHeaderContainer">
        <div className="addProjectHeaderContainer__title">{title}</div>
        <div>
          <img onClick={() => setModalIsOpen(false)} src={closeIcon} alt="" />
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
          setModalIsOpen(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="field">
              <label htmlFor="name">Project's name</label>
              <Field
                className="field__box"
                placeholder="e.g: Spotlify"
                type="text"
                id="name"
                name="name"
              ></Field>
              {errors.name && touched.name ? (
                <div className="field__error">{errors.name}</div>
              ) : null}
            </div>
            <div className="field">
              <label htmlFor="enterprise">Enterprise</label>
              <Field
                className="field__box"
                placeholder="Quop"
                type="text"
                id="enterprise"
                name="enterprise"
              ></Field>

              {errors.enterprise && touched.enterprise ? (
                <div className="field__error">{errors.enterprise}</div>
              ) : null}
            </div>
            <button className="form__button" type="submit">
              {buttonText}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProject;
