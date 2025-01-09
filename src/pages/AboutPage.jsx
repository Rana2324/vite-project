
import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";
const AboutPage = () => {

    let { id, name } = useParams();


    return (
        <div>
            <Menu />
            <h1>This is About page</h1>
            <p>ID:{id}</p>
            <p>Name:{name}</p>
        </div>
    );
};

export default AboutPage;