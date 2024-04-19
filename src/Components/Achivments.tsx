import {handImg, peopleImg} from "@/utils";
import Card from "@/utils/svg/Card";
import Click from "@/utils/svg/Click";

export function Achivments() {
    const achievementsData = [
        { img: peopleImg, count: '2,245,341', label: 'Members' },
        { img: handImg, count: '46,328', label: 'Clubs' },
        { img: <Click/>, count: '828,867', label: 'Event Bookings' },
        { img: <Card/>, count: '1,926,436', label: 'Payments' },
    ];

    return (
        <>
            <div className="achive">
                <div className="heading">
                    <div className="heading_cover">Helping a local
                        <p>business reinvent itself</p>
                    </div>
                    <div className="heading_text">We reached here with our hard work and dedication</div>
                </div>
                <div className="counts">
                    <div className="row">
                        {achievementsData.map((achievement, index) => (
                            <div key={index} className="column">
                                {/* Render image or SVG icon */}
                                {typeof achievement.img === 'string' ? (
                                    <img src={achievement.img} alt="" />
                                ) : (
                                    achievement.img
                                )}
                                <div className="inf">
                                    <div className="top">{achievement.count}</div>
                                    <div className="bot">{achievement.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}