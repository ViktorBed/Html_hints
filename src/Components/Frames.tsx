import {fr1, fr2, fr3} from "@/utils";
import Arrow from "@/utils/svg/arrow";

export function Frames() {
    const frameData = [
        {
            imgSrc: fr1,
            title: 'Creating Streamlined Safeguarding Processes with OneRen',
        },
        {
            imgSrc: fr2,
            title: 'What are your safeguarding responsibilities and how can you manage them?',
        },
        {
            imgSrc: fr3,
            title: 'Revamping the Membership Model with Triathlon Australia',
        }
    ];
    return (
        <div className="frames">
            {frameData.map((card, index) => (
                <div className="frame_cover">
                    <img src={card.imgSrc} alt={card.title}/>
                    <div className="frame" key={index}>
                        <div className="frame_top">
                            <div className="frame_top_text">{card.title}</div>
                            <div className="card_text">Readmore <Arrow/></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
