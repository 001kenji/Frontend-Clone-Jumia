import React, { useEffect, useLayoutEffect } from "react";
import '../CSS/feed.css'
import trolley from '../assets/icons/cart.png'
import search from '../assets/icons/search.png'
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/footer";
export default function Feed(){
 
    const searchImg = document.getElementById('search')
    const navigate = useNavigate()
    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/feeds') : navigate('/')
    },[])

   function MyCart(){
    const howMany = document.getElementById('howMany')

    alert(howMany.innerHTML)
   }
   var EmojiFeed = document.getElementById('EmojiFeed')
 function EmojiFunc (){
    
 }
    return(
        <>
        <div id='myNavbar'>
            <Navbar />
        </div>
        <div id="head">
            <h1>Feed</h1>
            <div id="head-nav">
           <span onClick={EmojiFunc} id="EmojiFeed">&#128513;</span>
            </div>
        </div>
        <div className=" py-3 bottom-0 mt-[50%]  align-middle content-center items-center w-[80%] flex justify-center mx-auto">
            <Footer  />
        </div>
        </>
    )
}