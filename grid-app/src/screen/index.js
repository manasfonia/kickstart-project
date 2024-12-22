import React, { useEffect, useState } from "react";
import { getGridDataAPI } from "../operations/Actions";
import { useDispatch, useSelector } from "react-redux"
import Layout from "./layout";
import Table from "./table";
import './style.css'

const MainScreen = ({}) =>{
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false)
    const { getGridData= {} } = useSelector((state) => ({
        getGridData: state?.gridReducer,
    }))

    useEffect(()=>{
        setLoader(true)
        dispatch(getGridDataAPI()).then((resp)=>{
            setLoader(false)
        });
    },[])

    return(
        <Layout>
            <div className="main-screen-wrapper">
            <div className="table-header">
                PLEDGED DATA
            </div>
                <Table data={getGridData} loader={loader}/>
        </div>
        </Layout>
    )
}

export default MainScreen;