import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import EarlyBirdsPage from "./pages/ToursPage/ToursPage";
import { routes } from "./routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} Component={Component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
