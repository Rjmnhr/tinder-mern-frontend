import { Header } from "../components/header/header";
import { RegisterForm } from "../components/register-form/register-form";
import TinderCards from "../components/tinder-cards/tinder-card";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="main-container">
                  <TinderCards />
                </div>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <div className="main-container">
                  <RegisterForm />
                </div>
              </>
            }
          />
          <Route
            path="/messages"
            element={
              <>
                <Header />
                <div className="main-container">
                  <h1>You don't have any matches yet</h1>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
