import React, { useEffect, useState } from "react";
import { getGridDataAPI } from "../operations/Actions";
import { useDispatch, useSelector } from "react-redux"
import Table from "./table";
import './style.css'

const MainScreen = ({}) =>{
    const dispatch = useDispatch();
    const { getGridData= {} } = useSelector((state) => ({
        getGridData: state?.gridReducer,
    }))

    useEffect(()=>{
        dispatch(getGridDataAPI());
    },[])

    return(
        <div className="main-screen-wrapper">
            <div className="header">
                Pledged Data
            </div>
                <Table data={getGridData} />
        </div>
    )
}

export default MainScreen;