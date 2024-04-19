import Logo1 from "@/utils/svg/Logo1";
import Logo2 from "@/utils/svg/Logo2";
import Logo3 from "@/utils/svg/Logo3";
import Logo4 from "@/utils/svg/Logo4";
import Logo5 from "@/utils/svg/Logo5";
import Logo6 from "@/utils/svg/Logo6";

export function Clients() {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo3];
    return (
        <>
            <div className="clients">
                <div className="our_client">
                    <p className="clients_heading">Our Clients</p>
                    <p className="clients_bott">We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="logos">
                    {logos.map((Logo, index) => (
                        <Logo key={index}/>
                    ))}
                </div>
            </div>
        </>
    );
}
