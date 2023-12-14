import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Mart from "./pages/mart/Mart";
import Event from "./pages/event/Event";
import SideBar from "./components/SideBar/components/SideBar";

const App = () => {
  return (
    <Wrap maxw={1440}>
      <Routes>
        <Route path="*" element={<h1>404</h1>}></Route>
        <Route path="/" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/mart" element={<Mart />}></Route>
        <Route path="/event" element={<Event />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
