import { useFormik } from "formik";

// Form with only email
const NewsLetterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "yes@gmail.com",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewsLetterForm;
