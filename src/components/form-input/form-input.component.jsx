import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

//Name:     FormInput
//Type:     Functional Component
//Input:    Props: label, Other props(type, required, onChange, name, value)
//Output:   <FormInput> wrapped in a <Div>
//Purpose:  Read in values for an input form, and reutrn them as a div within a form
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
