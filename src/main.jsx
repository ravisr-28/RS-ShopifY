import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./authentication/LoginPage.jsx";
import RegisterPage from "./authentication/RegisterPage.jsx";
import ForgotPage from "./authentication/ForgotPage.jsx";
import CheckoutPage from "./pages/CartItem/CheckoutPage.jsx";
import OrderConfirmation from "./pages/CartItem/OrderConfirmation.jsx";
import FilterData from "./pages/CartItem/FilterData.jsx";

const AppWrapper = () => {
  const [order,setOrder] = useState(null)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/forgot",
          element: <ForgotPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage setOrder={setOrder} />,
        },
        {
          path: "/order-confirmation",
          element: <OrderConfirmation Order={order} />,
        },
        {
          path:"/filter-data",
          element:<FilterData />
        }
      ],
    },
  ]);
  return<RouterProvider router={router} />
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <AppWrapper />
    </Provider>
  </StrictMode>
);
