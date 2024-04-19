import {blueIcon, TImg} from "@/utils";
import Logo2 from "@/utils/svg/Logo2";
import Logo3 from "@/utils/svg/Logo3";
import Logo4 from "@/utils/svg/Logo4";
import Logo5 from "@/utils/svg/Logo5";
import Logo6 from "@/utils/svg/Logo6";
import Arrow from "@/utils/svg/arrow";

export function Customer() {
    const log = [Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <>
            <div className="customer">
                <img src={TImg} alt=""/>
                <div className="customer_cover">
                    <div className="content">
                        <div className="content_text">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed
                            libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                            Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus
                            sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
                            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante
                            feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur
                            id nibh id sem dignissim finibus ac sit amet magna.
                        </div>
                        <div className="bott_text">
                            <div className="bot_text_green">Tim Smith</div>
                            <div className="bot_text_grey">British Dragon Boat Racing Association</div>
                        </div>
                    </div>
                    <div className="logos_stack">
                        <div className="logo_map">
                            <img src={blueIcon} alt=""/>
                            {log.map((Logo, index) => (
                                <Logo key={index}/>
                            ))}
                        </div>
                        <div className="meet">
                            Meet all customers
                            <Arrow/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
