import {Button} from "@/Components/button/button";
import {mainImg} from "@/utils";
import Dots from "@/utils/svg/Dots";

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero_left">
                    <div className="hero_left_text">
                        <div>
                            <p className="black_text">Lessons and insights</p>
                            <p className="green_text">from 8 years</p>
                        </div>
                        <p className="grey_text">Where to grow your business as a photographer: site or social
                            media?</p>
                    </div>
                    <Button className="butR">Register</Button>
                </div>
                <img src={mainImg} alt="" width="391px" height="407px"/>
            </div>
            <div className="dots"><Dots/></div>
        </>
    );
}
