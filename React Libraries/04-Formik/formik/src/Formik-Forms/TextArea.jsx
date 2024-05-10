import { ErrorMessage, Field } from "formik";

const TextArea = ({ label, name, ...rest }) => {
  console.log("HER", rest);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default TextArea;
