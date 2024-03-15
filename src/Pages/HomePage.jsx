// HomePage.js
import React from "react";
import CardComponent from "../Components/CardComponent";
import "../Components/Card.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "../Components/SingleCard";

const HomePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CardComponent />} />
                <Route path="/item/:name/:email" element={<SingleCard />} />


            </Routes>
        </BrowserRouter>
    );
}

export default HomePage;
