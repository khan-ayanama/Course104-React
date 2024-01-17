# Formik with Context

we swapped out useFormik() hook and replaced it with the `<Formik>` component. The `<Formik>` component accepts a function as its children (a.k.a. a render prop). Its argument is the exact same object returned by useFormik() (in fact, `<Formik>` calls useFormik() internally!).

our form works the same as before, except now we can use new components to express ourselves in a more concise manner.

The `<Field>` component by default will render an `<input>` component that, given a name prop, will implicitly grab the respective onChange, onBlur, value props and pass them to the element as well as any props you pass to it. However, since not everything is an input, `<Field>` also accepts a few other props to let you render whatever you want.

```js
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikWithContextWithFields = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br />
        <br />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <br />
        <Field name="firstName" className="form-input" placeholder="Jane" />
        <br />
        <br />
        <Field name="message" as="textarea" className="form-textarea" />
        <br />
        <br />
        <Field name="colors" as="select" className="my-select">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikWithContextWithFields;
```
