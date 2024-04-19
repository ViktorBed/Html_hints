import {logoImg} from "../utils";
import LogoName from "@/utils/svg/LogoName";
import {Button} from "@/Components/button/button";

export function Navbar() {
    return (
        <>
            <div className="navbar">
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
                <div className="log_Btns">
                    <div className="log">Login</div>
                    <Button className="but">Sign up</Button>
                </div>
            </div>
        </>
    );
}
