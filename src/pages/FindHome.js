import React from 'react';
import AddAnimal from '../components/AddAnimal';




const FindHome = () => {
    return (
        <div className="find-home">
            <div className="find-home-bg"/>
            <div className="find-home-sections">
                <div className="find-home-header">
                    <i class="fas fa-home"></i>
                    <h2 className="find-home-title">Znajdź dom dla zwierzaka!</h2>
                    <p className="find-home-paragraph"> Wystarczy że wypełnisz formularz!</p>
                </div>
                <AddAnimal/>
            </div>
        </div>
            

    );
};

export default FindHome;