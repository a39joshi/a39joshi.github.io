import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiFlowerFill } from "react-icons/pi";
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
                <img src={BrownFlower} alt="Home"  className="logo"/>
                {/* <PiFlowerFill/> */}
            </h3>
            <nav ref={navRef}>
                {/* <a href="/#">About</a> */}
                <a href="/#">Resume</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>

    ); 
}

export default Navbar;