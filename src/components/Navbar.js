import { useRef } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import BrownFlower from "../images/brown-flower.png"
import "../styles/main.css";

function Navbar() {
    const navRef = useRef(); 

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>
                <Link to="/">
                    <img src={BrownFlower} alt="Home" className="logo"/>
                </Link>
            </h3>
            <nav ref={navRef}>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                {/* <a href="/#">Resume</a>
                <a href="/contact">Contact</a> */}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

    ); 
};

export default Navbar;