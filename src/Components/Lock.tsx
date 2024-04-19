import {lockImg} from "@/utils";
import {Button} from "@/Components/button/button";

export function Lock() {
    return (
        <>
            <div className="unlock">
                <img src={lockImg} alt=""/>
                <div className="unlock_container">
                    <div className="unlock_container_text">
                        <p className="unlock_heading">How to design your site footer like we did</p>
                        <p className="unlock_bot">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                            Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus
                            vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                            non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis
                            massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur
                            faucibus ipsum id gravida.</p>
                    </div>
                    <Button className="butR">Learn More</Button>
                </div>
            </div>
        </>
    );
}
