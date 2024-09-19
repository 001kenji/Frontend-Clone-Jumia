import { INCREMENT,DECREMENT,GET_PROFILE,LOGOUT } from "./type";
import {useDispatch} from 'react-redux'


export function load_user (name,password) {
    console.log('called')
        function LoaderResponse(data) {
        console.log('authentication request is', JSON.stringify(data))
            // dispatch({
            //     type : USER_LOADED_SUCCESS,
            //     payload : JSON.parse(date)
            // })
        
        }
    //console.log(localStorage.getItem('access'), typeof(localStorage.getItem('access')))
    if (localStorage.getItem('access_token')  != 'undefined'){
            console.log('making the loaduser request')
            
        try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", `Bearer ${localStorage.getItem('access_token')}`);

                const raw = JSON.stringify({
                "username": name,
                "password": password
                });

                const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
                };

                fetch(`${import.meta.env.VITE_APP_API_URL}/user/`, requestOptions)
                .then((response) => response.json())
                .then((result) => LoaderResponse(result))
                .catch((error) => console.error(error));

            
        }catch(err) {
            console.log(err)
            dispatch ({
                type: USER_LOADED_FAIL
            })
    
        }
    
    }
    else {
        dispatch ({
            type: USER_LOADED_FAIL
        })

    }

}