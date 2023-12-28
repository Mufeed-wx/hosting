import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import contextcreater from "./components/context/Context-sample";
import Header from "./components/Header";
import Booking from "./components/Booking";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassHome from "./components/Class-home";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { useState } from "react";
import Product from "./components/products/Product";
import store from "./components/redux/store";

function App() {
  const [dark, setDark] = useState("bglight");

  const Home = lazy(() => import("./components/Home"));
  const Booking = lazy(() => import("./components/Booking"));
  const Contact = lazy(() => import("./components/Contact"));
  return (
    <div className="App">
      {/* <contextcreater.Provider value={{ dark, setDark }}> */}
      <Provider store={store}>
        <Suspense fallback={<div>Loading.....</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<ClassHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </Suspense>
      </Provider>
      {/* </contextcreater.Provider> */}
    </div>
  );
}

export default App;
