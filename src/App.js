import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <main>
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: <LandingPage />,
          path: "/",
        },
        {
          element: <AboutUs />,
          path: "/aboutRozWon",
        },
        { element: <ContactPage />, path: "/contactUs" },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
