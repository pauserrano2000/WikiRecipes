
import { useEffect, useState } from 'react';
import './DetailMeal.css';
import { getMealDetails } from '../../services/apicalls';
import { useParams } from 'react-router-dom';

const DetailMeal = () => {
    const [mealDetails, setMealDetails] = useState([])
    const { mealId } = useParams()

    useEffect(() => {
        if (mealDetails.length === 0) {
            getMealDetails(mealId)
                .then(res => setMealDetails(res.data.meals[0]))
                .catch(error => console.log(error))
        }
    }, [mealDetails])

    const separateLines = mealDetails?.strInstructions?.split("\r\n");

    return (
        <div className='detailMealDesign'>
            <div className='titleDesign'><h1>{mealDetails?.strMeal}</h1></div>
            <div className='collumns'>
                <div className='leftSide'>
                    <div className='detailPic'><center><img src={mealDetails?.strMealThumb} alt={mealDetails?.strMeal} /></center></div>
                    <div className='categoryDesign'>
                        <div className='textDesign'>Origin Country: <strong>{mealDetails?.strArea}</strong></div>
                        <div className='textDesign'>Category: <strong>{mealDetails?.strCategory}</strong></div>
                        <div className='textDesign'><a href={mealDetails?.strYoutube} target="_blank">Video tutorial</a></div>
                    </div>
                </div>
                <div className='rightSide'>
                    <h2>Method:</h2>
                    <div className='descriptionDesign'>{separateLines?.map((line, index) => {
                        return <p key={index}>{line}</p>
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default DetailMeal;
