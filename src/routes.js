import { Component } from "react";
import ToursPage from "./pages/ToursPage/ToursPage";
import TourItemPage from "./pages/TourItemPage/TourItemPage";

export const routes = [
  {
    path: "/",
    Component: ToursPage,
  },
  {
    path: "/tour" + "/:id",
    Component: TourItemPage,
  },
];
