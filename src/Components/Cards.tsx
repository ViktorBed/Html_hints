import {icon1, icon2, icon3} from "@/utils";

export function Cards() {
    const cardData = [
        {
            imgSrc: icon1,
            title: 'Membership Organisations',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            imgSrc: icon2,
            title: 'National Associations',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            imgSrc: icon3,
            title: 'Clubs And Groups',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        }
    ];
    return (
        <div className="cards">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <div className="card_top">
                        <img src={card.imgSrc} alt={card.title} />
                        <div className="card_top_text">{card.title}</div>
                    </div>
                    <div className="card_text">{card.description}</div>
                </div>
            ))}
        </div>
    );
}
