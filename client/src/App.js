import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
    const user = JSON.parse(localStorage.getItem("profile"));
    console.log(user);
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Navigate replace to="/posts" />}
                    />
                    <Route path="/posts" exact element={<Home />} />
                    <Route path="/posts/search" exact element={<Home />} />
                    <Route path="/posts/:id" exact element={<PostDetails />} />
                    <Route
                        path="/auth"
                        exact
                        element={
                            !user ? <Auth /> : <Navigate replace to="/posts" />
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
