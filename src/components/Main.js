import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useStateValue } from "../store/AuthGaurd/AuthContext";
import Header from "./header/Header";
import Home from "./Home";
export default function App() {
  const [header] = useStateValue();

  return (
    <>
      <React.Fragment>
        <Routes>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="*" element={<Home />} />
          <Route path="/home" element={"Hello"} />
          <Route path="/users" element={"users"} />
          <Route path="/reference" element={"reference"} />
        </Routes>
      </React.Fragment>
    </>
  );
}
