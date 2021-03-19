import React from "react";
import "./Header.css";
import Button from "./Button";
import Social from "./Social";


export default function Header() {
    return ( <div className="Header">
        <div className="container">
            <div className="row">
                <div className="col-4">
                <Button />
                </div>
                <div className="col-4">
        <img src="images/bfh-logo.png" alt="" />
        </div>
        <div className="col-4">
                 <Social />
        </div>
        <p>
            PROVIDING RACIALLY INCLUSIVE BOOKS FOR SCHOOLS
        </p>

</div>
    </div>
    </div>
    );
}