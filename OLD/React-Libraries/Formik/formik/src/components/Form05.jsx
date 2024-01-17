import { useFormik } from "formik";
import * as Yup from "yup";

const GetFieldProps = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be less than 15 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "must be 15 char long")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">FirstName:</label>
      <input
        type="text"
        id="firstName"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br />
      <br />
      <label htmlFor="lastName">LastName:</label>
      <input type="text" id="lastName" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default GetFieldProps;
