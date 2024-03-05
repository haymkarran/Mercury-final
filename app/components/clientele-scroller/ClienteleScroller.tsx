'use client'
import React, { useState } from "react";
import ClienteleScrollerApi from "./clienteleScrollerApi";
import './ClienteleScrollerCSS.css';

interface ClienteleScrollerProps {
    scrollerApiId: number;
}

const ClienteleScroller: React.FC<ClienteleScrollerProps> = ({scrollerApiId}) => {
    const [clienteleScrollerData] = useState(ClienteleScrollerApi);

    return (
        <>

                <div className="mainContainer">
                    <div className="innerContainer"> 
                        <ul className="ulGroup"> 
                            {
                                clienteleScrollerData.map((currentElement) => (
                                    <li key={currentElement.id} className="liItem"><img src={currentElement.clienteleImage} alt="image" /></li>
                                ))
                            }
                        </ul>
                        <ul className="ulGroup">
                            {
                                clienteleScrollerData.map((currentElement) => (
                                    <li key={currentElement.id} className="liItem"><img src={currentElement.clienteleImage} alt="image" /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

        </>
    );
};

export default ClienteleScroller;
