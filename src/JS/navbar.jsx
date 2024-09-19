import React from "react";
import '../App.css' 
import cart from '../assets/icons/cart.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import {Link} from 'react-router-dom'
import instagram from '../assets/instagram.png'
import '../CSS/navBar.css'
import '../mainpage.css'
export default function Navbar() {
    return (
        <>
        <div id='myHeader'>
            <div>
                <span id='refresh'>REFRESH</span>
            </div>
            <div className='md:w-94 w-[100%]'  id='itemSearch'>
                <input className="" placeholder='🔍 Search on jumia' type="text" />
                <button><img className=' bg-white rounded-md min-w-[30px] w-10  h-8' src={cart}></img></button>
                <div className=" flex flex-row justify-around my-auto  min-w-[30%] md:min-w-[20%] px-2" id='socialdiv'>
                <a href='https://web.facebook.com/login/?_rdc=1&_rdr'><img id='socialIcon' src={facebook}></img></a>
                <a href="https://www.instagram.com/accounts/login/?hl=en"><img id='socialIcon' src={instagram}></img></a>
                <a href=""><img id='socialIcon' src={tiktok}></img></a>
                
                
            </div>
            </div>
                    {/* <hr id="hr1"/> */}
            <div className=" text-sm sm:text-base px-2 sm:px-0" id='choicesBar'>
                <Link className=" hover:text-amber-500" to="/">Home</Link>
                <Link className=" hover:text-amber-500" to="/categories">Categories</Link>
                <Link className=" hover:text-amber-500" to="/feeds"> feed</Link>
                <Link className=" hover:text-amber-500" to="/accounts">Account</Link>
                <Link className=" hover:text-amber-500" to="/help">Help</Link>
            </div>

        </div>
        
        </>
    )
}
