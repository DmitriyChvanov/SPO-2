import { Component } from "react";
import ToursPage from "./pages/ToursPage/ToursPage";
import TourItemPage from "./pages/TourItemPage/TourItemPage";
import ContactForm from "./components/ContactForm/ContactForm";
import OrderPage from "./pages/OrderPage/OrderPage";
import Success from "./components/Success/Success";

export const routes = [
  {
    path: "/",
    Component: ToursPage,
  },
  {
    path: "/tour" + "/:id",
    Component: TourItemPage,
  },
  {
    path: "/order",
    Component: OrderPage,
  },
  {
    path: "/success",
    Component: Success,
  },
];
