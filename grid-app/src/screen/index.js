import React, { useEffect, useState } from "react";
import { getGridDataAPI } from "../operations/Actions";
import { useDispatch, useSelector } from "react-redux"
import './style.css'

const MainScreen = ({}) =>{
    const dispatch = useDispatch();
    const [gridData, setGridData] = useState({})

    const { getGridData= {} } = useSelector((state) => ({
        getGridData: state?.gridReducer,
    }))

    console.log("manasfonia", getGridData)

    useEffect(()=>{
        dispatch(getGridDataAPI());
    },[])

    return(
        <div className="main-screen-wrapper">
            <div className="header">
                Pledged Data
            </div>
            <div>
                {getGridData?.by ?? 'none'}
            </div>
        </div>
    )
}

export default MainScreen