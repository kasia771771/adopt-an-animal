import React, {useState} from 'react';
import { ref, set} from "firebase/database";
import {uid} from "uid";
import {db} from "./firebase";



const AddAnimal = () => {

    const [values, setValues] = useState({
        name: "",
        type: "",
        sex: "",
        age: "",
        story: "",
        photo: "",
        id:"",
    })

    const [errors, setErrors] = useState({})

    const [success, setSuccess] = useState(false)

    const uuid = uid();

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        });

        return{handleChange}
    }

    const handleSubmit = e => {
        e.preventDefault();

            set(ref(db, `/Animals/${uuid}`), {
            name: values.name,
            type: values.type,
            sex: values.sex,
            age: values.age,
            story: values.story,
            photo: values.photo,
            id:uuid

        }).then(() =>{
            setSuccess(true);
        })
        setValues("");

        
    }
    

        return (
            <div className="form-wrapper">
                <form action="" className={ success? "form-none":"form"} onSubmit={handleSubmit}>
                    <h3 className="form-title">Infomacje o zwierzaku </h3>

                        <div className="input-container">
                        {/* <p className={setError ? "error" : "no-error"}>Pole nie może być puste</p> */}
                            <input
                                className="default-input"
                                type="text"
                                name="name"
                                // defaultValue={name}
                                // onChange={(e) => setName(e.target.value)}
                                defaultValue={values.name}
                                onChange={handleChange}
                            />
                            <label className='text-label'>Imię</label>
                        </div>
                        <div className="select-all">
                        <div className="select-container">
                            <select
                                className="select-input"
                                name="type"
                                // defaultValue={type}
                                // onChange={(e) => setType(e.target.value)}
                                defaultValue={values.type}
                                onChange={handleChange}
                            >
                                <option value={null}>Wybierz</option>
                                <option value="Pies">Pies</option>
                                <option value="Kot">Kot</option>
                                <option value="Gryzoń">Gryzoń</option>
                                <option value="Gad">Gad</option>
                                <option value="Ptak">Ptak</option>
                            </select>
                            <label className="text-label">Wybierz zwierzę</label>
                        </div>
                        <div className="select-container">
                            <select
                                className="select-input"
                                name="sex"
                                // defaultValue={sex}
                                // onChange={(e) => setSex(e.target.value)}
                                defaultValue={values.sex}
                                onChange={handleChange}
                            >
                                <option value={null}>Wybierz</option>
                                <option value="Samiec">Samiec</option>
                                <option value="Samica">Samica</option>
                            </select>
                            <label className="text-label">Wybierz płeć</label>
                        </div>
                        </div>
                        
                        <div className="input-container">
                            <input
                                className="default-input"
                                type="text"
                                name="age"
                                // defaultValue={age}
                                // onChange={(e) => setAge(e.target.value)}
                                defaultValue={values.age}
                                onChange={handleChange}
                            /> 
                            <label className='text-label'>Wiek</label>
                        </div>
                        <div className="textarea-container">
                            <textarea
                                className="textarea-input"
                                // defaultValue={story}
                                cols="20"
                                rows="4"
                                name="story"
                                // placeholder="Tu wpisz choroby zwierzaka oraz jego historię."
                                // onChange={(e) => setStory(e.target.value)}
                                defaultValue={values.story}
                                onChange={handleChange}
                            />
                            <label className='text-label'>Tu wpisz choroby zwierzaka i jego historię</label>
                        </div>
                        
                        <div className="input-container">
                        <input
                            className="default-input"
                            type="text"
                            name="photo"
                            // defaultValue={photo}
                            // onChange={(e) => setPhoto(e.target.value)}
                            defaultValue={values.photo}
                                onChange={handleChange}
                        />
                        <label className='text-label'>Tu wklej link do zdjęcia</label>
                        </div>
                        <button className="submit-button">Znajdź dom</button>
                    </form>
                <div className={success ? "success-container": "success-none"}>
                    <i class="fas fa-paw paw-success"></i>
                    <h3 className="success-title">
                        Udało się!
                    </h3>
                    <p className="success-message">Twój zwierzak został dodany do ofert adopcyjnych</p>
                </div>
            </div>

        );
}


export default AddAnimal;



