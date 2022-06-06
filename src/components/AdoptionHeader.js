import React from 'react';

const AdoptionHeader = () => {
    return (
        <header className="adoption-header">
            <div className="adoption-header-content container" >
                <h1 className="adoption-header-title">Chcesz adpotować zwierzaka?</h1>
                <p className="adoption-header-text">
                    Poniżej znajdziesz ogłoszenia ze zwierzakami do adopcji.
                    Pamiętaj że zwierzę potrzebuje opieki, niekiedy o wiele więcej niż człowiek.
                    Adoptuj z rozwagą!
                </p>
            </div>
        </header>
    );
};

export default AdoptionHeader;