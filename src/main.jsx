import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./routes/aboutUs";
import ContactUs from "./routes/contactUs";
import CompanyPresence from "./routes/companyPresence";
import OurProducts from "./routes/ourProducts";
import SubmittedPage from "./routes/SubmittedPage";
import DermaProducts from "./routes/Products/DermaProducts";
import PediatricsProducts from "./routes/Products/PediatricsProducts";
import ENTProducts from "./routes/Products/ENTProducts";
import OtherProducts from "./routes/Products/GeneralProducts";
import PediaProductDetail from "./routes/Product Details/PediaProductDetails";
import DermaProductDetail from "./routes/Product Details/DermaProductDetails";
import EntProductDetail from "./routes/Product Details/EntProductDetails";
import GeneralProductDetail from "./routes/Product Details/GeneralProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/company-presence", element: <CompanyPresence /> },
  { path: "/submitted", element: <SubmittedPage /> },
  { path: "/our-products", element: <OurProducts /> },
  { path: "/our-products/derma-products", element: <DermaProducts /> },
  { path: "/our-products/pedia-products", element: <PediatricsProducts /> },
  { path: "/our-products/ent-products", element: <ENTProducts /> },
  { path: "/our-products/general-products", element: <OtherProducts /> },
  { path: "/our-products/pedia-products/:productId", element: <PediaProductDetail /> },
  { path: "/our-products/derma-products/:productId", element: <DermaProductDetail /> },
  { path: "/our-products/ent-products/:productId", element: <EntProductDetail /> },
  { path: "/our-products/general-products/:productId", element: <GeneralProductDetail /> }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);