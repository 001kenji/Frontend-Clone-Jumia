import React, { useEffect, useLayoutEffect, useState } from "react";
import './App.css'
import fail from './assets/fail.jpg'
import tick from './assets/tick.jpg'
import loadImg from './assets/loader.png'
import {redirect, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { load_user } from "./action/act";
import {useDispatch, useSelector} from 'react-redux'
import { RootReducer } from "./reducer/reducer";
import { INCREMENT, USER_LOADED_FAIL, USER_LOADED_SUCCESS } from "./action/type";
import Footer from "./Components/footer";

// import axios from 'axios';
export default function Logger(props){
    const navigate = useNavigate()
    const database = useSelector(RootReducer)
    const dispatcher = useDispatch()

   

    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/home') : navigate('/')
    },[])
    
    console.log('local storage: ',typeof(localStorage.getItem('IsAuthenticated')))
    
    const {register, watch, reset, handleSubmit, formState, setValue, getValues} = useForm({
        defaultValues : {
            'username' :'',
            'email' : '',
            'phonenumber' :'',
            'password' : '',
            'singupemail' : '',
            'signupname': '',
            'signupnumber': '',
            'signupPassword': '',
            'confirmSignupPass':''
        },
        mode : 'all'
    })
    const {errors, isSubmitting, isDirty, isValid} = formState
    const [Action, setAction] = useState('login')
    const [loginResponseData, setloginResponseData] = useState()
    const [progError,seterror] = useState(false)
    const [progSuccess,setSuccess] = useState(false)
    const [progLoad, setload] = useState(false)

    const [progErrormessage,seterrormessage] = useState('Error')
    const [progSuccessmessage,setSuccessmessage] = useState('Successful')
    const [progLoadmessage, setloadmessage] = useState('Loading ...')
    const progressSuccess = {
        display : progSuccess ? 'flex' : 'none'
    }
    const progressError = {
        display : progError ? 'flex' : 'none'
    }
    const progressLoad = {
        display : progLoad ? 'flex' : 'none'
    }
  
    const errorDiv = document.getElementsByName('errorDiv')
    const successDiv = document.getElementsByName('successDiv')
    const loadDiv = document.getElementsByName('loadDiv')

    function Showerror(props){
        if(props == 'show'){
           seterror(true)
        }else if(props == 'hide'){
            seterror(false)
        }
    }
    function ShowSuccess(props){
        if(props == 'show'){
            setSuccess(true)
        }else if(props == 'hide'){
            setSuccess(false)
        }
    }
    function ShowLoad(props){
        const loadDiv = document.getElementsByName('loadDiv')
        if(props == 'show'){
            setload(true)
        }else if(props == 'hide'){
            setload(false)
        }
    }

    

     //console.log(database)
    const SubmitLogin = async (props) => {
        ShowLoad('show')
        function Datafunc(props) {
            //console.log(props)
            const data = JSON.parse(props)
             //console.log(data)
             
                 setSuccessmessage('Signed In successfully')

                 dispatcher({
                    type : USER_LOADED_SUCCESS,
                    payload : data
                 })
                setTimeout(() => {
                    ShowLoad('hide')
                    ShowSuccess('show')
                }, 3000);
                setTimeout(() => {
                    
                    
                    console.log(data)
                    ShowSuccess('hide')
                    //load_user( getValues('email'),getValues('password'))
                    navigate('/home')
                }, 6000);

        }
        
        
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        
            const raw = JSON.stringify({
            "username": props.username,
            "password": props.password
            });

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch(`${import.meta.env.VITE_APP_API_URL}/user/`, requestOptions)
            .then((response) => response.json())
            .then((result) => Datafunc(result))
            .catch((error) => Responsecatch(error));

        function Responsecatch(props){
            //console.log(props)
            ShowLoad('hide')
            Showerror('show')
            seterrormessage('User dosen\'t exist')
            setTimeout(() => {
                Showerror('hide')
            }, 4000);
                dispatcher({
                    type: USER_LOADED_FAIL
                })
        
            }   
    }


    const SubmitSingup = async (props) => {
        ShowLoad('show')
        function ReponseFunc(props){
            const data = JSON.parse(props)
            console.log(typeof(data))
            if(data.exists == true){
                  console.log('user exists')
                  ShowLoad('hide')
                  Showerror('show')
                    seterrormessage('User Exist')
                  setTimeout(() => {
                      
                      Showerror('hide')
                  }, 4000);
            }else if(data.exists == false){
                console.log('user dosent exist')
                ShowLoad('hide')
                 ShowSuccess('show')
                 setSuccessmessage('Signed up successfully')
                setTimeout(() => {
                    
                    
                    ShowSuccess('hide')
                    setAction('login')
                }, 6000);

            }
          
        }
        function ErrorFunc(props) {
            ShowLoad('hide')
             Showerror('show')
             
            setTimeout(() => {
                Showerror('hide')
               
            }, 4000);
        }
        const user = {
            "email": props.singupemail,
            'name' : props.signupname,
            "number": props.signupnumber,
            'password': props.signupPassword

        }

        console.log(user)
        // const { data } = await axios.post(
        //     "http://127.0.0.1:8000/token/",
        //     user,
        //     {
        //       headers: { "Content-Type": "application/json" },
        //       withCredentials: true,
        //     }
        //   );
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

       var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(user),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cred/", requestOptions)
        .then(response => response.json())
        .then(data => ReponseFunc(data))
        .catch(error => ErrorFunc(error));
        

        //console.log('data from server is '+ loginResponseData.access)

        // localStorage.clear()
        // localStorage.setItem('access_token', loginResponseData.access)
        // localStorage.setItem('refresh_token', loginResponseData.refresh)
        // axios.defaults.headers.common['Authorization']=`Bearer ${loginResponseData['access']}`;


        //window.location.href = '/'
        

    }




    function funcAction() {

        setAction((e) => e == 'login' ? 'signUp' : 'login')
    }

    return (
        <>
        <div>
            <h1 id="welcome-heading" className=" w-[90%] mx-auto font-normal py-1 text-slate-900 text-center align-middle">Welcome to the {Action} page</h1>
        
            <div className=" max-w-[80%] mx-auto">
                <h1 className=" font-semibold mx-auto text-center " id="Disp">{Action}</h1>
                <div style={progressError} className=" z-50 top-0 sticky" name='errorDiv' id="notifier">
                    <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
                    <p className="text-sm font-semibold text-red-500  sm:text-base" id="errorNot">{progErrormessage}</p>   
                </div>
                <div style={progressSuccess} className=" z-50 top-0 sticky" name='successDiv' id="notifier" > 
                    <img className="w-6 sm:w-8 "  src={tick} alt="" />
                    <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">{progSuccessmessage}</p>
                </div>
                <div style={progressLoad} className=" z-50 top-0 sticky" name='loadDiv' id="notifier">
                    <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                    <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >{progLoadmessage}</p>
                </div>
                
                {Action == 'login' ?
                    <form noValidate onSubmit={handleSubmit(SubmitLogin)} id="login-form"  >
                        <input  placeholder="USERNAME" {...register('username',{
                            required : 'Username number is required'
                        })} type="text" />
                        {errors.username && <p id='errorform'>{errors.username?.message}</p>}

                        <input placeholder="PASSWORD" {...register('password',{
                            required : 'Password is required!',
                    
                        })} type="password" />
                        {errors.password && <p id='errorform'>{errors.password?.message}</p>}

                        <button disabled={!isDirty || !isValid} className=" cursor-pointer disabled:bg-gray-500 disabled:hover:text-slate-900 bg-blue-600 rounded-sm transition-all duration-500 min-w-[80px] mx-auto font-semibold text-slate-900 hover:text-blue-600 hover:bg-slate-900" type="submit">Submit</button>
                    </form>

                :
                    <form noValidate onSubmit={handleSubmit(SubmitSingup)} id="signup-confirm-form">
                        <span className=" text-sm text-center mx-auto  font-mono font-semibold">Fill in the form to Sign Up.</span>
                        <input placeholder="USERNAME" {...register('signupname',{
                            required : 'Username is Required!'
                        })} type="text" />
                        {errors.signupname && <p id='errorform'>{errors.signupname?.message}</p>}
                        
                        <input {...register('signupnumber',{
                            required :'Phone Number is Requried!',
                            valueAsNumber : {
                                value : true,
                                message : 'values should be a number'
                            }
                        })} placeholder="NUMBER" type="number" />
                        {errors.signupnumber && <p id='errorform'>{errors.signupnumber?.message}</p>}
                        
                        
                        <input placeholder="SIGNUP EMAIL" {...register('singupemail',{
                            required : 'Email is required!',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }
                        })} type="email" />
                        {errors.singupemail && <p id='errorform'>{errors.singupemail?.message}</p>}
                        
                        <input placeholder="PASSWORD" {...register('signupPassword',{
                            required : 'Password is Required!'
                        })} type="password" />
                        {errors.signupPassword && <p id='errorform'>{errors.signupPassword?.message}</p>}
                        
                        <input {...register('confirmSignupPass',{
                            required : true,
                            validate: (val =   string) => {
                                if (watch('signupPassword') != val) {
                                return "Your passwords do no match";
                                }
                            },
                        })} placeholder="CONFIRM PASSWORD" type="password" />
                        {errors.confirmSignupPass && <p id='errorform'>{errors.confirmSignupPass?.message}</p>}
                        <button disabled={!isDirty || !isValid} className=" disabled:bg-gray-500 disabled:hover:text-slate-900  bg-blue-600 rounded-sm transition-all duration-500 min-w-[80px] mx-auto font-semibold text-slate-900 hover:text-blue-600 hover:bg-slate-900 cursor-pointer" type="submit">Submit</button>
                    </form>
                }

                
                {Action == 'login' ? 
                        <p onClick={funcAction} className=" italic underline  underline-offset-2 text-center w-fit min-w-[80px]  overflow-hidden mx-auto text-sm font-semibold font-mono mt-[5%] cursor-pointer">Sign-Up</p>                
                :
                        <p onClick={funcAction} className=" italic underline  underline-offset-2 text-center w-fit min-w-[80px] overflow-hidden mx-auto text-sm font-semibold font-mono mt-[5%] cursor-pointer">Log-in</p>                
                }
            </div>
        </div>
        <div className=" bottom-0 mt-3  align-middle content-center items-center w-[80%] flex justify-center mx-auto">
             <Footer  />
        </div>
       
        </>
    )
}