import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Counter from "../Counter/Counter";
import User from "../User/UserUI";

const darkTheme = createTheme({type: "dark"});

export const RouterConfig:React.VFC =() => {
  return (
    <>
    <NextUIProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
              <Route path="*" element={<div>404　ページが見つかりません。</div>} />
              <Route index element={<Home />} />
              <Route path="user" element={<User />} />
              <Route path="login" element={<Login />} />
              <Route path="counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
    </NextUIProvider>
    </>
  );
}