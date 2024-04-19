import {Cards} from "@/Components/Cards";

export function Community() {
    return (
        <>
            <div className="com">
                <div className="com_text">
                    <p className="com_heading">Manage your entire community in a single system</p>
                    <p className="clients_bot">Who is Nextcent suitable for?
                    </p>
                </div>
                <div className="com_cards">
                    <Cards/>
                </div>
            </div>
        </>
    );
}
