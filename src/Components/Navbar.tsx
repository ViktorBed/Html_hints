import {logoImg} from "../utils";
import LogoName from "@/utils/svg/LogoName";
import {Button} from "@/Components/button/button";
import {useRef} from "react";

export function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const navHum = useRef<HTMLDivElement>(null);


    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle(
                "open"
            );
        }
        if (navHum.current) {
            navHum.current.classList.toggle(
                "open"
            );
        }
    };
    return (
        <>
            <header className="navbar" ref={navRef}>
                <div className="logo">
                    <img src={logoImg} alt=""/>
                    <LogoName/>
                </div>
                <nav className="nav">
                    <p>Home</p>
                    <p>Service</p>
                    <p>Feature</p>
                    <p>Product</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </nav>
                <div className="log_Btn">
                    <div className="log">Login</div>
                    <Button className="but">Sign up</Button>
                </div>
                <div className="hamburger" onClick={showNavbar} ref={navHum}>
                    <div className="hams"></div>
                </div>
            </header>
        </>
    );
}
