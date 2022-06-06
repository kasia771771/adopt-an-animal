import React from 'react'
import { getDatabase, ref,onValue} from "firebase/database";

let animals = [];
export default function CareCards() {

    const db = getDatabase();
    const starCountRef = ref(db, `/Care`);
    onValue(starCountRef, (snapshot) => {
        let data = snapshot.exportVal();
        animals = [];
        Object.keys(data).map((id) => {
            animals.push(data[id])
        })
    });

    return (
        <div className="adoption-cards-care container">
                <h3 className="care-title">Szukam opieki</h3>
                <ul className="cards-list">
                    {
                        Object.keys(animals).map((id) => {
                            return (
                                <li key={animals[id].id} className="card-item">
                                    <div className="card">
                                        <div className="photo-container">
                                            <img src={animals[id].photo} alt="animal-photo" className="animal-photo"/>
                                        </div>
                                        <div className="animal-info">
                                            <p>
                                                <span>Imię:</span>{animals[id].name}
                                            </p>
                                            <p>
                                                <span>Gatunek:</span>{animals[id].type}
                                            </p>
                                            <p>
                                                <span>Płeć:</span>{animals[id].sex}
                                            </p>
                                            <p>
                                                <span>Wiek:</span>{animals[id].age}
                                            </p>
                                            <p className="date-info">
                                               <span>Od:</span>  {animals[id].from}

                                            </p>
                                            <p className="date-info">
                                                <span>Do:</span>  {animals[id].to}
                                            </p>
                                        </div>
                                        <div className="animal-description">
                                            <p className="description-title">Opis:</p>
                                            <p className="animal-story">{animals[id].story}</p>
                                            <button className="care-btn">Opiekuj się</button>

                                        </div>

                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
        </div>
    )
}
