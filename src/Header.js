import React from "react";
import "./Header.css";


export default function Header() {
    return ( <div className="Header">
        <img src="images/bfh-logo.png" alt="" />
        <p>
   PROVIDING RACIALLY INCLUSIVE BOOKS FOR SCHOOLS
        </p>
        <button type="button" class="btn btn-primary">
            Donate
        </button>
    </div>
    );
}