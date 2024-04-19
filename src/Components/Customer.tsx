import {TImg} from "@/utils";

export function Customer() {
    return (
        <>
            <div className="cust">
                <img src={TImg} alt=""/>
                <div className="cust_cover">
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

                </div>
            </div>
        </>
    );
}
