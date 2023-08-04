import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Counter from "../Counter/Counter";
import User from "../User/UserUI";
import MessageList from "../Message/MessageList";
import EditProfile from "../User/EditProfile";
import Signin from "../Signin/Signin";

const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // primary
            primary: "#8A2BE2",
            primaryLight: "#6A1B9C",
            primaryLightHover: "#9C3CEB",
            primaryGradient: "linear-gradient(112deg, #8A2BE2 -25%, #FF69B4 -10%, #DDA0DD 80%)",
            primaryBorder: "#8C2DDD",
            primaryShadow: "#8C2DDD",
            // secondary
            secondary: "#B537F2",
            secondaryLight: "#9A64D1",
            secondaryLightHover: "#8C3DBF",
            secondaryBackground: "linear-gradient(112deg, #8A2BE2 -25%, #FF69B4 -10%, #DDA0DD 80%)",
            secondaryBorder: "#A52FE0",
            secondaryShadow: "#9F28DA",
            // tertiary
            tertiaryLight: "#6DC4FF",
            tertiaryLightHover: "#5BAEEB",
            tertiaryBackground: "linear-gradient(112deg, #3CB9FC -25%, #FF69B4 -10%, #DDA0DD 80%)",
            tertiaryBorder: "#3290D7",
            tertiaryShadow: "#2E86CC",
            // base
            baseColor: "#120052",
            baseBlackColor: "#222222",
            baseGrayColor: "#333333",
            // default
            gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#5E1DAD",
            // you can also create your own color
            white: "#ffffff",
            black: "#111111",
        },
        space: {},
        fonts: {},
    },
});

export const RouterConfig: React.VFC = () => {
    return (
        <>
            <NextUIProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<div>404　ページが見つかりません。</div>} />
                        <Route index element={<Home />} />
                        <Route path="user" element={<User />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signin" element={<Signin />} />
                        <Route path="messagelist" element={<MessageList />} />
                        <Route path="profile/edit" element={<EditProfile />} />
                        <Route path="counter" element={<Counter />} />
                    </Routes>
                </BrowserRouter>
            </NextUIProvider>
        </>
    );
};
