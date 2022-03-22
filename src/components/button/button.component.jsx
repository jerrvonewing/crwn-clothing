import "./button.styles.scss";

//Name:     Button
//Type:     Functional Component
//Input:    Props: children, buttonType, ...otherProps
//Output:   <Button> Component
//Purpose:  Read in the button type, and other properties, then returns it
const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
