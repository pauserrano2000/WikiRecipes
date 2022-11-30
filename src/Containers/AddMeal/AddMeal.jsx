
import { useState, useEffect } from 'react';
import './AddMeal.css'
import { getCategories } from "../../services/apicalls";
import { errorCheck } from '../../services/validate';

const AddMeal = () => {
    const [newMeal, setNewMeal] = useState({
        name: '',
        category: '',
        country: '',
        picture: '',
        video: '',
        instructions: ''
    })

    const [newMealError, setNewMealError] = useState({
        nameError: '',
        categoryError: '',
        countryError: '',
        pictureError: '',
        videoError: '',
        instructionsError: ''
    })

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    // const [formReport, setFormReport] = useState('');
    const formReport = '';

    const inputHandler = (e) => {
        setNewMeal((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const errorHandler = (e) => {
        let error = "";

        error = errorCheck(e.target.name, e.target.value);

        setNewMealError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error
        }));

    }

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data.categories))
            .catch((error) => console.log(error));
    }, []);

    const selectHandler = (event) => {
        setCategory(event.target.value);
        inputHandler(event);
      };

    const registerMe = () => {
        let error = "";

        if (newMeal !== [] && error === "") {
            let convertido = JSON.stringify(newMeal);
            localStorage.setItem("dataNewMeal", convertido);
            let dataFromStorage = localStorage.getItem("dataNewMeal");
            let objetoReconvertido = JSON.parse(dataFromStorage);
            console.log(objetoReconvertido);
/*            formReport = 'The new Meal was created';
            console.log(formReport)*/
        } else {
/*            formReport = 'Please solve all the errors!!!';
            console.log(formReport)*/
        }
    }

    return (
        <div className='addMealDesign'>
            <div className='formDesign'>
                <label for="name">Name:</label>
                <input placeholder='Name' type="name" name='name'
                    className={newMealError.nameError === "" ? "basicInput" : "basicInput errorInput"}
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e)} />
                <div className='errorMsg'>{newMealError.nameError}</div>
                <label for="country">Country:</label>
                <input placeholder='Origin Country' type="country" name='country'
                    className={newMealError.countryError === "" ? "basicInput" : "basicInput errorInput"}
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e)} />
                <div className='errorMsg'>{newMealError.countryError}</div>
                <label for="picture">Picture:</label>
                <input placeholder='Picture URL' type="picture" name='picture'
                    className={newMealError.pictureError === "" ? "basicInput" : "basicInput errorInput"}
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e)} />
                <div className='errorMsg'>{newMealError.pictureError}</div>
                <label for="video">Video:</label>
                <input placeholder='Video URL' type="video" name='video'
                    className={newMealError.videoError === "" ? "basicInput" : "basicInput errorInput"}
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e)} />
                <div className='errorMsg'>{newMealError.videoError}</div>
                <label for="instructions">Method:</label>
                <textarea placeholder='Method' type="instructions" name='instructions'
                    className={newMealError.instructionsError === "" ? "basicInput" : "basicInput errorInput"}
                    onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e)} />
                <div className='errorMsg'>{newMealError.instructionsError}</div>
                {categories.length !== 0 && (
                    <div className="custom-select">
                        <label for="name">Category:</label>
                        <select className="select" name="category" value={category} onChange={selectHandler}>
                            {categories.map((category) => (
                                <option key={category.idCategory} value={category.strCategory}>
                                    {" "}
                                    {category.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="registerCardBottom">
                    <div onClick={() => registerMe()} className="registerButton" >Register</div>
                    <div className='errorMsg'>{formReport}</div>
                </div>
            </div>
        </div>
    )
}

export default AddMeal;
