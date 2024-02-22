import React, { useEffect, useLayoutEffect } from "react";
import '../App.css'
import Navbar from "./navbar";
import Header from "./header";
import CardAnimator from "./cardAnimator";
import LastViewed from "./lastViewed";
import Variables from "./variables";
import LastSeach from "./lastSeach";
import {useSelector} from 'react-redux'
import { RootReducer } from "../reducer/reducer";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const database = useSelector(RootReducer)
    const navigate = useNavigate()
    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/home') : navigate('/')
    },[])
    console.log(localStorage.getItem('IsAuthenticated'))
    return(
        <>
            <div id='bodyApp'>
                <div id='myNavbar'>
                    <Navbar />
                </div>

                <Header />

                <CardAnimator />
                <LastViewed />
                <Variables />
                <LastSeach />
            </div>
        </>

    )
}