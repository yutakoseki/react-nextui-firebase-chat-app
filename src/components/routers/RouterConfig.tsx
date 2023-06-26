import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Home from "../pages/Home";
import Login from "../login/Login";
import Welcome from "../pages/Welcome";
import User from "../pages/User";

const darkTheme = createTheme({type: "dark"});

export const RouterConfig:React.VFC =() => {
  return (
    <>
    <NextUIProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
              <Route path="*" element={<div>404　ページが見つかりません。</div>} />
              <Route index element={<Home />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="loginpre" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="user" element={<User />} />
          </Routes>
        </BrowserRouter>
    </NextUIProvider>
    </>
  );
}