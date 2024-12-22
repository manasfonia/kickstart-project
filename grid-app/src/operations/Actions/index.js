import { GET_GRID_DATA } from "../type";
import axios from 'axios'

const apiUrl = 'http://localhost:3700/'
const renderAPIUrl = 'https://kickstart-project.onrender.com/'

const getGridDataAPI = () => async (dispatch) => {
    axios.get(renderAPIUrl + 'getGridData').then((response)=>{
        dispatch({
            type: GET_GRID_DATA,
            payload: response?.data ?? null
        })
    }).catch(error => {
        console.error('error', error);
    })
}

export{
    getGridDataAPI
}