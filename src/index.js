import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/user.context";
import "./index.scss";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
