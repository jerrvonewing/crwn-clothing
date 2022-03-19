import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";

//Name:     SignIn
//Type:     Functional Component
//Input:
//Output:
//Purpose:

const SignIn = () => {
  /*
    useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);
*/
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
