import {Button} from "@/Components/button/button";
import WhiteArrow from "@/utils/svg/WhiteArrow";
import LogoNameFooter from "@/utils/svg/LogoNameFooter";
import LogoSymbols from "@/utils/svg/LogoSymbols";
import X from "@/utils/svg/X"
import Youtube from "@/utils/svg/Youtube"
import Ball from "@/utils/svg/Ball"
import Instagram from "@/utils/svg/Instagram"
import Send from "@/utils/svg/Send";


export function Footer() {
    const Social = [X, Youtube, Ball, Instagram];

    return (
        <>
            <footer className="footer">
                <div className="title">
                    <h1>Pellentesque suscipit<br/> fringilla libero eu.</h1>
                    <Button className="butFooter">Get a Demo <WhiteArrow/></Button>
                </div>
                <div className="foot">
                    <div className="foot_left">
                        <div className="foot_logo">
                            <LogoNameFooter/>
                            <LogoSymbols/>
                        </div>
                        <div className="copy">
                            <p className="footer_text">Copyright © 2020 Nexcent ltd.</p>
                            <p className="footer_text">All rights reserved</p>
                        </div>
                        <div className="social">
                            {Social.map((Soc, index) => (
                                <Soc key={index}/>
                            ))}
                        </div>
                    </div>
                    <div className="links">
                        <div className="col">
                            <p>Company</p>
                            <div className="link">
                                <p className="footer_text">About us</p>
                                <p className="footer_text">Blog</p>
                                <p className="footer_text">Contact us</p>
                                <p className="footer_text">Pricing</p>
                                <p className="footer_text">Testimonials</p>
                            </div>
                        </div>
                        <div className="col">
                            <p>Support</p>
                            <div className="link">
                                <p className="footer_text">Help center</p>
                                <p className="footer_text">Terms of service</p>
                                <p className="footer_text">Legal</p>
                                <p className="footer_text">Privacy policy</p>
                                <p className="footer_text">Status</p>
                            </div>
                        </div>
                        <div className="col">
                            <p>Stay up to date</p>
                            <input className="inp" placeholder="Your email address"/>
                            <Send/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
