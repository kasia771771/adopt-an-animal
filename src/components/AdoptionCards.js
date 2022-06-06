import React from 'react';
import { getDatabase, ref,onValue} from "firebase/database";

let animals = [];
const AdoptionCards = (data) => {

const db = getDatabase();
const starCountRef = ref(db, `/Animals`);
onValue(starCountRef, (snapshot) => {
    let data = snapshot.exportVal();
    animals = [];
    Object.keys(data).map((id) => {
        animals.push(data[id])
    })
});

// const db = getDatabase();
// const starCountRef = ref(db, `/Animals`);
// get(starCountRef).then((snapshot) => {

//     snapshot.forEach((child) => {
//         animals.push(child.val())
//     })
// });

    return (
        <>
            <div className="adoption-cards container">
                <h3 className="care-title">Szukam domu</h3>
                <ul className="cards-list">
                    {
                        Object.keys(animals).map((id) => {
                            return (
                                <li key={animals[id].id} className="card-item">
                                    <div className="card">
                                        <div className="photo-container">
                                            <img src={animals[id].photo} alt="animal" className="animal-photo"/>
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
                                        </div>
                                        <div className="animal-description">
                                            <p className="description-title">Opis:</p>
                                            <p className="animal-story">{animals[id].story}</p>
                                            <button className="adopt-btn">Adoptuj</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default AdoptionCards;