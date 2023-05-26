import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";


export const RouterConfig:React.VFC =() => {
  return (
    <>
    <NextUIProvider>
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<div>404　ページが見つかりません。</div>} />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="welcome" element={<Welcome />} />
        </Routes>
        </BrowserRouter>
    </NextUIProvider>
    </>
  );
}