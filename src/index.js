import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { UserProvider } from "./context/user.context";
import "./index.scss";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";
import { stripePromise } from "./utils/stripe/stripe.utils";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
