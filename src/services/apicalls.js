
import axios from 'axios';

var apiKey = '1'; //for educational use

var apiRoot = 'https://www.themealdb.com/api/json/v1';

export const searchMeal = async (query) => {

    return axios.get(`${apiRoot}/${apiKey}/search.php?s=${query}`);
};

export const getMealDetails = async () => {

    return axios.get(`${apiRoot}/${apiKey}/lookup.php?i=${id}`);
};
