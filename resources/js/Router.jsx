import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpSignIn from "./pages/signupsignin/SignupSignin";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUpSignIn" element={<SignUpSignIn />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
