import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  name: string;
  enterprise: string;
}

interface Projects {
  name: string;
  enterprise: string;
  collaborators?: {
    name: string;
    email: string;
  }[];
}

interface Props {
  handleSubmit: (value: Projects) => void;
}

const validate = (values: MyFormValues) => {
  const errors = { name: "", enterprise: "" };
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.enterprise) {
    errors.enterprise = "required";
  }
  return errors;
};

const initialValues: MyFormValues = {
  name: "",
  enterprise: ""
};

const ProjectSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  enterprise: Yup.string().required("Required")
});

const AddProject: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div>
      <div>Add Project</div>
      <Formik
        initialValues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
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
