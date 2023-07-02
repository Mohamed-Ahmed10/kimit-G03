import { people } from "../assets/database/data";

export default function Persons() {
    return (
        <div>
            {
                people.map((person , index) =>
                    <div key={index}>
                        <h3>{person.name}</h3>
                        <p>{person.profession}</p>
                    </div>
                )
            }
        </div>
    )
}
