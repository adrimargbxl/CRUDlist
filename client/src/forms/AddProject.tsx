import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  id: string;
  name: string;
  enterprise: string;
}

interface Projects {
  id: string;
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

interface Props {
  handleSubmit: (value: Projects) => void;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const validate = (values: MyFormValues) => {
  const errors = { name: "", enterprise: "" };
  if (!values.name) {
    errors.name = "Cannot be blank";
  }
  if (!values.enterprise) {
    errors.enterprise = "Cannot be blank";
  }
  return errors;
};

const initialValues: MyFormValues = {
  id: "",
  name: "",
  enterprise: ""
};

const ProjectSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  enterprise: Yup.string().required("Required")
});

const AddProject: React.FC<Props> = ({ handleSubmit, setModalIsOpen }) => {
  return (
    <div>
      <div>Add Project</div>
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
            <label htmlFor="name">Project's name</label>
            <Field type="text" id="name" name="name"></Field>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="enterprise">Enterprise</label>
            <Field type="text" id="enterprise" name="enterprise"></Field>
            {errors.enterprise && touched.enterprise ? (
              <div>{errors.enterprise}</div>
            ) : null}
            <button type="submit">Add project</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProject;
