import { Component } from "react";
import EarlyBirdsPage from "./pages/EarlyBirds/EarlyBirds";
import TourItem from "./components/TourItem/TourItem";

export const routes = [
  {
    path: "/",
    Component: EarlyBirdsPage,
  },
  {
    path: "/tour" + "/:id",
    Component: TourItem,
  },
];
