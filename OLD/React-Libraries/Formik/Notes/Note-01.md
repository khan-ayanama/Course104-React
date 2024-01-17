# Formik

Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

## Email Newsletter Signup form

```js
import { useFormik } from "formik";

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
```

- We pass our form’s initialValues and a submission function (onSubmit) to the useFormik() hook.
- `handleSubmit:` A submission handler
- `handleChange:` A change handler to pass to each `<input>`, `<select>`, or `<textarea>`
- `values:` Our form’s current values

## SignUP form with firstname, lastname and email

```js
import { useFormik } from "formik";

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
```
