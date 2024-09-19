import React from "react";
import '../App.css'
import '../CSS/CardAnimator.css'
export default CardAnimator
import flashCard from '../assets/myCards/flashCard.jpg'
import brandCard from '../assets/myCards/brandDay.jpg'
import blackCard from '../assets/myCards/blackCard.jpg'
import crazyCard from '../assets/myCards/crazyCard.jpg'
import mitCard from '../assets/myCards/mitcard.png'
import jumboCard from '../assets/myCards/jumbocard.jpg'
import firstCard from '../assets/myCards/crownCard.jpg';
import vaseline from '../assets/items/vaseline.jpg'
import lipstick from '../assets/items/lipstick.jpg'
import people from '../assets/items/people.jpg'
import people2 from '../assets/items/people2.jpg'
import cake from '../assets/items/cake.jpg'
import jumbo from '../assets/items/TCL.jpg'
import privateClass from '../assets/items/private.jpg'
function CardAnimator(){
const Mycards = [
    {
        leftWing : {
          title :  'FLASH SALES',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : flashCard,
        rightWing : '',
        rightWingImg : vaseline
    },
    {
        leftWing : {
          title :  'BRAND DAY',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg :brandCard,
        rightWing : '',
        rightWingImg : lipstick
    },
    {
        leftWing : {
          title :  'JUMIA \n BLACK FRIDAY',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : blackCard,
        rightWing : '',
        rightWingImg : people
    },
    {
        leftWing : {
          title :  'CRAZY DEALS DAY',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : crazyCard,
        rightWing : '',
        rightWingImg : people2
    },
    {
        leftWing : {
          title :  'M🌴T M🌴T',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : mitCard,
        rightWing : '',
        rightWingImg : cake
    },
    {
        leftWing : {
          title :  'JUMBO 🚀 SALES',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : jumboCard,
        rightWing : '',
        rightWingImg : jumbo
    },
    {
        leftWing : {
          title :  'FIRST CLASS SALES',
          details1 : 'LIVE NOW',
          details2 : 'get it now',
          details3 : '$ 230'
        },
        leftWingImg : firstCard,
        rightWing : '',
        rightWingImg : privateClass
    }
]

const MycardsMapper = Mycards.map((items) => 
  
        <div  id="cardContainer">
            <div style={{backgroundImage: `url(${items.leftWingImg})`}} id="leftWing"> {/*leftWing} */}
            
                <address id="leftWingAdress">
                    <h1>{items.leftWing.title}</h1>
                    <p1>{items.leftWing.details1}</p1>
                    <p1>{items.leftWing.details2}</p1>
                    <button1 id='leftWingCost'>{items.leftWing.details3}</button1>
                </address>

            </div> 
            <hr  id="rightWingHr"/>
            <div id="rightWing" style={{backgroundImage : `url(${items.rightWingImg})`}}> {/*rigthWing} */}
            </div>
        </div>
)
    return(
        <>
        <div className=" bg-gray-500 " id="masterContainer">
        <div className=" bg-transparent"   id="megaContainer">{MycardsMapper}</div>
        </div>
        <hr id="hr2" />
        </>
    )
}

