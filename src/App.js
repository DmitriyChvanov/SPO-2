import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import EarlyBirdsPage from "./pages/EarlyBirds/EarlyBirds";
import { routes } from "./routes";

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
      </BrowserRouter>
    </>
  );
}

export default App;
