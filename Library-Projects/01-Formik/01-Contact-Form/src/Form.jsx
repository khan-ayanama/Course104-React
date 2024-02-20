import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(value) => {
          JSON.stringify(value);
          console.log("hello", value);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 character or less than it!!")
            .required("Name is Required"),
          email: Yup.string()
            .email("Invalid Email")
            .required("Email is Required!!"),
          message: Yup.string().required("Required"),
        })}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form_element">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" id="name" />
              {touched.name && errors.name && <ErrorMessage name="name" />}
            </div>
            <div className="form_element">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              {touched.email && errors.email && <ErrorMessage name="email" />}
            </div>
            <div className="form_element">
              <label htmlFor="message">Message:</label>
              <Field as="textarea" name="message" id="message" />
              {touched.message && errors.message && (
                <ErrorMessage name="message" />
              )}
            </div>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
