import {unlockImg} from "@/utils";
import {Button} from "@/Components/button/button";

export function Unlock() {
    return (
        <>
            <div className="unlock">
                <img src={unlockImg} alt=""/>
                <div className="unlock_conteiner">
                    <div className="unlock_conteiner_text">
                        <p className="unlock_heading">The unseen of spending three years at Pixelgrade</p>
                        <p className="unlock_bot">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    </div>
                    <Button className="butR">Learn More</Button>
                </div>
            </div>
        </>
    );
}
