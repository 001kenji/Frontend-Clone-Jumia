import React from "react";
import '../CSS/headerDealimg.css'
import black_friday from  '../assets/delas card img/black Friday.png'
import applicances from  '../assets/delas card img/appliances deal.jpg'
import Beuty_shop from  '../assets/delas card img/beuty.jpg'
import computer_deals from  '../assets/delas card img/compute deals.jpg'
import flash_sales from  '../assets/delas card img/flash sales.jpg'
import free_delivary from  '../assets/delas card img/free delivary.jpg'
import home_deals from  '../assets/delas card img/home deals.jpg'
import ladies_fashion from  '../assets/delas card img/ladies fashion deal.jpg'
import mens_fashion from  '../assets/delas card img/mens fashion.jpg'
import phone_deals from  '../assets/delas card img/phone daels.jpg'
import Speakers_deals from  '../assets/delas card img/speaker deals.jpg'
import tv_deals from  '../assets/delas card img/tv deals.jpg'

export default function Header () {
const headerDetails = [
    {
        Img :  black_friday,
        headName : 'Black friday Deal'
    },
    {
        Img : flash_sales,
        headName : 'Flash Sales'
    },
    {
        Img : phone_deals,
        headName : 'Phone Deals'
    },
    {
        Img : home_deals,
        headName : 'Home Deals'
    },
    {
        Img : ladies_fashion,
        headName : 'Ladies Fashion'
    },
    {
        Img : mens_fashion,
        headName : 'Men`s Fashion'
    },
    {
        Img : Beuty_shop,
        headName : 'Beuty Shop'
    },
    {
        Img : free_delivary,
        headName : 'Free Delivay'
    },
    {
        Img : computer_deals,
        headName : 'Computer Deals'
    },
    {
        Img : Speakers_deals,
        headName : 'Speakers Deal'
    },
    {
        Img : tv_deals,
        headName : 'TV Deal'
    },
    {
        Img : applicances,
        headName : 'appliances Deal'
    }
]
const HeaderDetailsMapper = headerDetails.map((block) =>
    
   
    <div   id="headerContainer"> 
    
        <div className=" hover:p-2  gap-2" id="headerDealCard">
        <img className=" mx-auto" id="headerDealimg" src={block.Img} />
        <p className=" font-semibold  text-center mx-auto  text-slate-900">{block.headName}</p> 
        </div>
       
    </div>
    
    
)
    return (
        <>
        <div className=" bg-gray-500" id="masterCard">
        <div className=" " id="noon">{HeaderDetailsMapper}</div>
        </div>
        <hr className=" h-[4px] bg-slate-900"  />
        </>
    )
}