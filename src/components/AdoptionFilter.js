import React from 'react';

const AdoptionFilter = () => {
    return (
        <div className="adoption-filter container">
            <h2 className="adoption-filter-title">Adopcja</h2>
            <form className="adoption-filter-form">
                <label>Gatunek zwierzaka:</label>
                <select name="race-filter" id="" className="adoption-rase-filter">
                    <option value="filter-all-animals">Wszystkie</option>
                    <option value="filter-dog">Pies</option>
                    <option value="filter-cat">Kot</option>
                    <option value="filter-rodent">Gryzonie</option>
                    <option value="filter-reptile">Gady</option>
                    <option value="filter-bird">Ptaki</option>
                </select>

            </form>
        </div>
    );
};

export default AdoptionFilter;