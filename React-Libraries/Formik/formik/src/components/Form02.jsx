import { useFormik } from "formik";

// Form with email, firstname and lastname
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">FirstName:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <br />
      <br />
      <label htmlFor="lastName">LastName:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignUpForm;
