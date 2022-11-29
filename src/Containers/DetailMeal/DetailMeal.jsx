import { useEffect, useState } from 'react';
import './DetailMeal.css';
import { useDarkThemeContext } from "../../Context/theme-context";
import { getMealDetails } from '../../services/apicalls';
import { useParams } from 'react-router-dom';

const DetailMeal = () => {
    const [mealDetails, setMealDetails] = useState([])
    const {mealId} = useParams()

    useEffect(() => {
        if(mealDetails.length === 0){
            getMealDetails(mealId)
            .then(res => setMealDetails(res.data.meals[0]))
            .catch(error => console.log(error))
            console.log(mealDetails)
            console.log(mealDetails?.strMeal)
        }
    }, [mealDetails])

    return (
        <div className='detailMealDesign'>
            <div className='titleDesign'>{mealDetails?.strMeal}</div>
            <div className='detailPic'><img src={mealDetails?.strMealThumb} alt={mealDetails.strMeal}/></div>
            <div className='titleDesign'>{mealDetails?.strArea}</div>
            <div className='titleDesign'>{mealDetails?.strCategory}</div>
            <div className='descriptionDesign'>{mealDetails?.strInstructions}</div>
            <div className='titleDesign'>{mealDetails?.strYoutube}</div>
        </div>
    )
}

export default DetailMeal;
