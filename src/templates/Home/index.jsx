import React from "react";
import { Header } from "../../components/Header";
import { GlobalStyles } from "../styles/global-styles";
import { Games } from "../../components/Games";

export const Home = () => {
    return(
        <div className="container">
            <Header />
            <Games />
            <GlobalStyles />
        </div>
    )
}