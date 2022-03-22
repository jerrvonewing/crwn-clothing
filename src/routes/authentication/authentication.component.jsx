import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

//Name:     Authentication
//Type:     Functional Component
//Input:    None
//Output:   <SignInForm> and <SignUpForm> wrapped in a <div>
//Purpose:  Render the SignInForm and SignUpForm together

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
