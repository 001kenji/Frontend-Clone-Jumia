import React, { useEffect, useLayoutEffect } from "react";
import Navbar from "./navbar";
import wallet from '../assets/icons/wallet.png'
import rightArrow from '../assets/icons/rightArrow.png'
import '../App.css'
import orderIcon from '../assets/icons/orderIcon.png'
import inboxIcon from '../assets/icons/inboxIcon.png'
import ratingIcon from '../assets/icons/ratingsIcon.png'
import voucherIcon from '../assets/icons/vouchersIcon.png'
import savedIcon from '../assets/icons/savedIcon.png'
import followIcon from '../assets/icons/followIcon.png'
import veiwedIcon from '../assets/icons/viewedIcon.png'
import searchedIcon from '../assets/icons/searchedIcon.png'
import {useDispatch, useSelector} from 'react-redux'
import { RootReducer } from "../reducer/reducer";
import { LOGOUT } from "../action/type";
import { useNavigate } from "react-router-dom";
export default MyAccount 
function MyAccount(){
    const database = useSelector(RootReducer)
    const navigate = useNavigate()
    const dispatcher = useDispatch()
    var currency = 'ksh'
    var balance = 0
    

    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/accounts') : navigate('/')
    },[])

    function Logout(){
        dispatcher({
            type : LOGOUT
        })
        navigate('/')
    }
    return(
        <>
        <div>
            <div><Navbar/></div>
        <div className=" flex flex-col align-middle text-center" id="accountWelcome">
            <big>Welcome {database.profile.profile[0].name}</big>
            <p>{database.profile.profile[0].email}</p>
        </div>
        
        <div>
            <button id="ballanceBtn">
                <img id='walletImg' src={wallet}></img>
                <p>Your balance: {currency} {balance}</p>
            </button>
            <hr />
        </div>
        </div>
        <div id='accountDiv'>
            <span>MY B-Intel ACCOUNT</span>
            <button id="accountOrderBtn">
                <div id="AOI"><img src={orderIcon}></img><p>Orders</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountInboxBtn">
                <div id="AOI"><img src={inboxIcon}></img><p>Inbox</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountRatingBtn">
                <div id="AOI"><img src={ratingIcon}></img><p>Ratings & Reviews</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountvoucherBtn">
                <div id="AOI"><img src={voucherIcon}></img><p>Vouchers</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountsavedBtn">
                <div id="AOI"><img src={savedIcon}></img><p>Saved Items</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountfollowBtn">
                <div id="AOI"><img src={followIcon}></img><p>Followed Sellers</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            <button id="accountsearchedBtn">
                <div id="AOI"><img src={searchedIcon}></img><p>Recently Searched</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
            </button>
            
        </div>
       <div id='accountDiv'>
        <span>MY SETTINGS</span>
        <button id="settingsAddressBtn">
                <div id="AOI"><p>Address book</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
        </button>
        <button id="settingsManagementBtn">
                <div id="AOI"><p>Account Management</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
        </button>
        <button id="settingsCloseBtn">
                <div id="AOI"><p>Close Account</p></div>
                <div> <img id='rightArrow' src={rightArrow}></img></div>
                
        </button>
       </div>
       <div className="  " id="logOutDiv">
        <button >
            <big onClick={Logout}>LOGOUT</big>
        </button>
       </div>
        </>
    )
}