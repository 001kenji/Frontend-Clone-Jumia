import React, { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import '../App.css'
import chart from '../assets/icons/chat.png'
import rightArrow from '../assets/icons/rightArrow.png'
import { useNavigate } from "react-router-dom";

 function Help(){
    const [AppVersion, setAppVersion] =  useState('12.4.3')
    var [CacheData,setCacheData] = useState('2.54 MB')
    const navigate = useNavigate()
    const notificationDiv = useRef();
    const [Push, setPush] = useState(true)
    const pushStyler = {
        backgroundColor : Push ? 'grey' : 'orange',
        borderColor : Push ? 'grey' : 'orange'
    }
    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/help') : navigate('/')
    },[])
    function Notifire (){
        var notifireDiv = document.getElementById('notificationDiv')
       setPush((e) => !e)
    
    }
    function UpdateVersion() {
        const random = Math.round(Math.random() *10, 2)
        console.log(random)
        setAppVersion(random)
    }
    function ClearCache () {
       setCacheData('0.0.0')
    }
    return(
        <>
        <div>
        <div id='myNavbar'>
            <Navbar />
        </div>
        </div>
        <div id="chatDiv">
          <button id="chatBtn">
            <img src={chart}></img>
            <span>Start live Chat</span>
          </button>
        </div>
        <div  id='accountDiv'>
            <span>ABOUT B-Intel</span>
            <button id='accountOrderBtn'>
                <p>B-intel Services</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
            <button id='accountOrderBtn'>
                <p>Frequently Asked Questions</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
            <button id='accountOrderBtn'>
                <p>Privacy Policy</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
        </div>
        <div  id='accountDiv'>
            <span>SETTINGS</span>
            <button className=" " id='accountOrderBtn'>
                <p>Push Notifications</p>
                <div className=" rounded-md w-[60px] h-10" style={pushStyler}   id='notificationDiv'><span onClick={() => setPush((e) => !e)} className={` transition-all  ${Push ? " translate-x-0" :" translate-x-8"}  duration-500 p-2 max-w-1 max-h-2 w-2 h-2`}></span></div>
            </button>
            <button id='accountOrderBtn'>
                <p>Country</p>
               
                <select id="LocationContainer">
                    <option disabled selected>Location</option>
                    <option value="kenya">kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Ethopia">Ethopia</option>
                </select>
            </button>
            <button id='accountOrderBtn'>
                <p>Language</p>
                
                <select id="LocationContainer">
                    <option disabled selected>Language</option>
                    <option value="English">English</option>
                    <option value="Kiswahili">Kiswahili</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
            </button>
        </div>
        <div  id='accountDiv'>
            <span>APP INFO</span>
            <button id='appVersionBtn'>
                <p>App Version: {AppVersion} </p>
                <button onClick={UpdateVersion} id="clearCache">UPDATE</button>
            </button>
            <button id='CacheBtn'>
                <p>Cache Used: {CacheData} </p>
                <button onClick={ClearCache} id="clearCache">CLEAR</button>
            </button>
           <hr></hr>
        </div>
        </>
    )
}


export default Help