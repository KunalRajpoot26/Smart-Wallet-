import React from "react";
import './Home.css';
import Bitcoin from './Bitcoin.webp';
import Icp from './icp.webp';
import Logo from './logo.webp';

function Home() {
return (
    <>
        <div className="punch-line"><h2 className="first-line">The etherium that'll make you places</h2></div>
        <div className="tag-line">
            <div className="Your"><h1 className="main-line">Your</h1></div>
            <img className="Logo" src={Logo}></img>
            <div className="trusted"><h1 className="main-line">trusted</h1></div>
            <div className="partner"><h1 className="main-line">partner</h1></div>
        </div>
        <div className="bitcoin-image">
                <img className="bitcoin" src={Bitcoin}></img>
            </div>
        <div className="icp-image">
            <img className="Icp" src={Icp}></img>
        </div>
        <div className="friend-line">
            <span><h1>Keep everything in one wallet</h1></span>
        </div>
        <div className="power-line">
            <h1>Powerful tools made for everyone</h1>
        </div>
        <div className="trust-line"><h1>Used by you secured by us</h1></div>
    </>
);
};

export default Home;