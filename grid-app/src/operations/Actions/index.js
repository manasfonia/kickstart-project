import { GET_GRID_DATA } from "../type";
import axios from 'axios'

const apiUrl = 'http://localhost:3700/'

const getGridDataAPI = () => async (dispatch) => {
    axios.get(apiUrl + 'getGridData').then((response)=>{
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