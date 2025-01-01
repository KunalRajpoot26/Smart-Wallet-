import React from "react";
import './Footer.css';
import Logo from './logo.webp';

function Footer() {

// function D() {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     console.log(currentYear)
// }



// const [currentYear, setCurrentYear] = useState(D());
// const year = ({currentYear}) => {
//     setCurrentYear();
// };


    return (
        <>
            <div className="main">
                <div className="logo">
                    <img className="logo-in-nav" src={Logo}></img>
                    enzo 
                </div>
                <div className="inc">
                    <h2>&copy; {new Date().getFullYear()} enzo</h2>
                    </div>
            </div>
        </>
    );
};

export default Footer;