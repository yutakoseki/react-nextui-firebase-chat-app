import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SampleHome } from "../SampleHome";
import { SamplePage1 } from "../SamplePage1";
import { SamplePage2 } from "../SamplePage2";
import { NextUIProvider } from "@nextui-org/react";


export const RouterConfig:React.VFC =() => {
  return (
    <>
    <NextUIProvider>
        <BrowserRouter>
        <Routes>
            <Route index element={<SampleHome />} />
            <Route path="page1" element={<SamplePage1 />} />
            <Route path="page2" element={<SamplePage2 />} />
        </Routes>
        </BrowserRouter>
    </NextUIProvider>
    </>
  );
}