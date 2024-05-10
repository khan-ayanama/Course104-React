import { ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default DatePicker;
