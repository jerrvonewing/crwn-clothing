import "./form-input.styles.scss";

//Name:     FormInput
//Type:     Functional Component
//Input:    Props: label, Other props(type, required, onChange, name, value)
//Output:   <FormInput> wrapped in a <Div>
//Purpose:  Read in values for an input form, and reutrn them as a div within a form
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
