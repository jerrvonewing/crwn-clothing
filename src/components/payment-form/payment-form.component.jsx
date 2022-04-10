import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandlder = async (e) => {
    e.preventDefault();

    if (!stripe == !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted}> Pay Now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
