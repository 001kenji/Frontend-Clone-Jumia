import React, { useEffect, useLayoutEffect, useState } from "react";
import './App.css'
import fail from './assets/fail.jpg'
import tick from './assets/tick.jpg'
import loadImg from './assets/loader.png'
import {Link, redirect, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { load_user } from "./action/act";
import {useDispatch, useSelector} from 'react-redux'
import { RootReducer } from "./reducer/reducer";
import { INCREMENT, USER_LOADED_FAIL, USER_LOADED_SUCCESS } from "./action/type";
import Footer from "./Components/footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginCover from './assets/hm1.jpg'
import Logo from './assets/hm3.jpg'
import { isAction } from "redux";
// import axios from 'axios';
export default function Logger(props){
    const navigate = useNavigate()
    const database = useSelector(RootReducer)
    const dispatcher = useDispatch()
    const [isChecked, setIsChecked] = useState(false);
   
    useLayoutEffect(() => {
        localStorage.getItem('IsAuthenticated') == 'true' ? navigate('/home') : navigate('/')
    },[])
    
    
    
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
    

    const SubmitLogin = async (props) => {
        toast('Loading...',{
            type : 'info',
            theme : 'colored',
            position : 'top-right'
        })
        function Datafunc(props) {
            //console.log(props)
            
            const data = JSON.parse(props)
            if(data.found != false){
                dispatcher({
                    type : USER_LOADED_SUCCESS,
                    payload : data
                 })
                setTimeout(() => {                    
                    navigate('/home')
                }, 1000);
                toast('Log-in Success',{
                    type : 'success',
                    theme : 'colored',
                    position : 'top-right'
                })
            }else {
                dispatcher({
                    type : USER_LOADED_FAIL,
                    payload : data
                 })
                
                toast('User dosen\'t exist',{
                    type : 'error',
                    theme : 'colored',
                    position : 'top-right'
                })
            }
                 

        }
        
        
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        
            const raw = JSON.stringify({
            "name": props.username,
            "password": props.password
            });

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch(`https://loginbackendtest1.vercel.app/user/write/`, requestOptions)
            .then((response) => response.json())
            .then((result) => Datafunc(result))
            .catch((error) => Responsecatch(error));

        function Responsecatch(props){            
            toast('User dosen\'t exist',{
                type : 'error',
                theme : 'colored',
                position : 'top-right'
            })
                dispatcher({
                    type: USER_LOADED_FAIL
                })
        
            }   
    }


    const SubmitSingup = async (props) => {
        toast('Loading...',{
            type : 'info',
            theme : 'colored',
            position : 'top-right'
        })
        function ReponseFunc(props){
            const data = JSON.parse(props)
           
            if(data.exists == true){             
                    toast('User Exist change your username or email',{
                        type : 'warning',
                        theme : 'colored',
                        position : 'top-right'
                    })
            }else if(data.exists == false){
                
                 toast('Sign-Up Successful',{
                    type : 'success',
                    theme : 'colored',
                    position : 'top-right'
                })
                setAction('login')
            }
          
        }
        function ErrorFunc(props) {
            toast('An error occured',{
                type : 'error',
                theme : 'colored',
                position : 'top-right'
            })
        }
        const user = {
            "email": props.singupemail,
            'name' : props.signupname,
            "number": props.signupnumber,
            'password': props.signupPassword

        }

       
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
        <div className=" z-40 flex flex-col  h-screen min-h-[100%] md:flex-row w-full">
        <ToastContainer />
                <div className={` bg-image w-full sm:h-screen relative md:w-[50%] md:h-full h-full  sm:min-h-[100%] min-h-[80%]  flex justify-center align-middle`}>
                    <img className=" z-0 w-full h-full" src={LoginCover} title="cover-image"  alt="" />
                    
                    <blockquote className=" z-40 absolute mt-[50%] bg-slate-900 text-slate-100 h-fit my-auto py-3 px-3 bg-opacity-60 p-1  rounded-sm ">
                    <p className=" text-center font-mono font-semibold px-1 text-base md:text-lg">Bring imagination into life.</p>
                    </blockquote>
                    
                    
                    
                </div>
                <div className=" bg-slate-100 w-full flex flex-col md:w-[50%] md:h-full ">
                        <img  src={Logo} title="school logo" className="  my-auto shadow-md shadow-slate-500  rounded-full w-fit h-fit max-w-[300px] max-h-[200px] -p-2 relative mx-auto" alt="" />
                        <h1 className=" text-3xl  mx-auto text-center font-semibold font-mono py-2  h-fit p-4 w-fit"> Login page</h1>
                        <small className=" m-auto w-fit italic font-semibold">Fill the fields bellow to log in</small>
                        {Action == 'login' ?
                        <form noValidate className=" max-w-[600px] gap-4 min-h-fit shadow-lg mb-auto shadow-amber-500 flex flex-col  justify-around w-[90%] border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900 p-3 rounded-sm  mx-auto align-middle"  onSubmit={handleSubmit(SubmitLogin)} id="login-form"  >
                            
                            <input  placeholder="USERNAME" {...register('username',{
                                    required : 'Username number is required'
                                })} 
                                className='mx-auto outline-1 outline-gray-400   border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900  rounded-sm p-2 w-3/4' type="text"  
                            />
                            
                            {errors.username && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[60%] min-w-fit rounded-sm italic text-sm sm:text-base">{errors.username?.message}</p>}
                            <input {...register('password',{
                                    required : 'Password is required!',

                                })} id="password" className='outline-1 outline-gray-400  mx-auto  border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900   rounded-sm p-2 w-3/4'   placeholder="PASSWORD" type="password" />
                            {errors.password && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[80%] rounded-sm text-sm sm:text-base" >{errors.password?.message}</p>}
                            <button id="submit" disabled={!isDirty || !isValid} type="submit" className=" transition-all duration-500 disabled:bg-gray-300 rounded-sm mx-auto p-2 bg-blue-700 hover:border-blue-600 border-[1px] hover:shadow-slate-800 hover:shadow-md hover:bg-transparent min-w-[100px] font-bold hover:text-blue-600">Login</button>
                        </form>
                        :
                        <form noValidate className=" max-w-[600px] gap-4 min-h-fit shadow-lg shadow-amber-500 flex flex-col  justify-around w-[90%] border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900 p-3 rounded-sm  mx-auto align-middle"  onSubmit={handleSubmit(SubmitSingup)} id="signup-confirm-form"  >
                            
                            <input  placeholder="USERNAME" {...register('signupname',{
                                    required : 'Username is Required!'
                                })}
                                className='mx-auto outline-1 outline-gray-400   border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900  rounded-sm p-2 w-3/4' type="text"  
                            />
                            {errors.signupname && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[60%] min-w-fit rounded-sm italic text-sm sm:text-base">{errors.signupname?.message}</p>}
                            <input  {...register('signupnumber',{
                                    required :'Phone Number is Requried!',
                                    valueAsNumber : {
                                        value : true,
                                        message : 'values should be a number'
                                    }
                                })} placeholder="NUMBER"
                                className='mx-auto outline-1 outline-gray-400   border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900  rounded-sm p-2 w-3/4' type="number"  
                            />
                            {errors.signupnumber && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[60%] min-w-fit rounded-sm italic text-sm sm:text-base">{errors.signupnumber?.message}</p>}
                            <input  placeholder="SIGNUP EMAIL" {...register('singupemail',{
                                    required : 'Email is required!',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid email',
                                    }
                                })}
                                className='mx-auto outline-1 outline-gray-400   border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900  rounded-sm p-2 w-3/4' type="email"  
                            />
                            {errors.singupemail && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[60%] min-w-fit rounded-sm italic text-sm sm:text-base">{errors.singupemail?.message}</p>}
                            
                            <input placeholder="PASSWORD" {...register('signupPassword',{
                                    required : 'Password is Required!'
                                })}
                            id="password" className='outline-1 outline-gray-400  mx-auto  border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900   rounded-sm p-2 w-3/4' type="password" />
                            {errors.signupPassword && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[80%] rounded-sm text-sm sm:text-base" >{errors.signupPassword?.message}</p>}
                            
                            <input {...register('confirmSignupPass',{
                                    required : true,
                                    validate: (val =   string) => {
                                        if (watch('signupPassword') != val) {
                                        return "Your passwords do no match";
                                        }
                                    },
                                })}
                            id="password" placeholder="CONFIRM PASSWORD" className='outline-1 outline-gray-400  mx-auto  border-[1px] placeholder:text-center placeholder:font-semibold border-slate-900   rounded-sm p-2 w-3/4' type="password" />
                            {errors.confirmSignupPass && <p className=" my-2 max-w-[600px] bg-slate-900 text-red-500 font-semibold mx-auto text-center w-[80%] rounded-sm text-sm sm:text-base" >{errors.confirmSignupPass?.message}</p>}
                           
                            
                            <button id="submit" disabled={!isDirty || !isValid} type="submit" className=" transition-all duration-500 disabled:bg-gray-300 rounded-sm mx-auto p-2 bg-blue-700 hover:border-blue-600 border-[1px] hover:shadow-slate-800 hover:shadow-md hover:bg-transparent min-w-[100px] font-bold hover:text-blue-600">Sign Up</button>
                        </form> }
                        <div className="pl-2 text-center flex flex-col mb-auto mt-6 w-full justify-around gap-3">
                            <div className=" flex flex-col  lg:flex-wrap gap-2 w-fit mx-auto justify-around">
                            <p onClick={funcAction} className={` font-semibold my-3`} >For gest users: username: <span className=" cursor-pointer hover:text-amber-600 text-sky-500 font-semibold "   >mack</span></p>
                            <p onClick={funcAction} className={` font-semibold my-3`} >For gest users: password: <span className=" cursor-pointer hover:text-amber-600 text-sky-500 font-semibold "   >@mack001</span></p>    
                                <p onClick={funcAction} className={` ${Action == 'signUp' ? 'flex' : 'hidden' }  font-semibold my-3`} >Have an account: <span className=" cursor-pointer hover:text-amber-600 text-sky-500 font-semibold underline underline-offset-4"   >Log-In</span></p>
                                <p onClick={funcAction} className={` ${Action == 'login' ? 'flex' : 'hidden' } font-semibold my-3`} >Dont have an account: <span className="cursor-pointer hover:text-amber-600 text-sky-500 font-semibold underline underline-offset-4"   >Sign Up</span></p>
                            </div>
                            <div className=" bottom-0 mt-3  align-middle content-center items-center w-fullflex justify-center mx-auto">
                                <Footer  />
                            </div> 
                        </div>
                </div>
                
            </div>
            
        </div>
       
       
        </>
    )
}


//  {Action == 'login' ?
// <form noValidate onSubmit={handleSubmit(SubmitLogin)} id="login-form"  >
// <input  placeholder="USERNAME" {...register('username',{
//     required : 'Username number is required'
// })} type="text" />
// {errors.username && <p id='errorform'>{errors.username?.message}</p>}

// <input placeholder="PASSWORD" {...register('password',{
//     required : 'Password is required!',

// })} type="password" />
// {errors.password && <p id='errorform'>{errors.password?.message}</p>}

// <button disabled={!isDirty || !isValid} className=" cursor-pointer disabled:bg-gray-500 disabled:hover:text-slate-900 bg-blue-600 rounded-sm transition-all duration-500 min-w-[80px] mx-auto font-semibold text-slate-900 hover:text-blue-600 hover:bg-slate-900" type="submit">Submit</button>
// </form>

// :
// <form noValidate onSubmit={handleSubmit(SubmitSingup)} id="signup-confirm-form">
// <span className=" text-sm text-center mx-auto  font-mono font-semibold">Fill in the form to Sign Up.</span>
// <input placeholder="USERNAME" {...register('signupname',{
//     required : 'Username is Required!'
// })} type="text" />
// {errors.signupname && <p id='errorform'>{errors.signupname?.message}</p>}

// <input {...register('signupnumber',{
//     required :'Phone Number is Requried!',
//     valueAsNumber : {
//         value : true,
//         message : 'values should be a number'
//     }
// })} placeholder="NUMBER" type="number" />
// {errors.signupnumber && <p id='errorform'>{errors.signupnumber?.message}</p>}


// <input placeholder="SIGNUP EMAIL" {...register('singupemail',{
//     required : 'Email is required!',
//     pattern: {
//         value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         message: 'Please enter a valid email',
//     }
// })} type="email" />
// {errors.singupemail && <p id='errorform'>{errors.singupemail?.message}</p>}

// <input placeholder="PASSWORD" {...register('signupPassword',{
//     required : 'Password is Required!'
// })} type="password" />
// {errors.signupPassword && <p id='errorform'>{errors.signupPassword?.message}</p>}

// <input {...register('confirmSignupPass',{
//     required : true,
//     validate: (val =   string) => {
//         if (watch('signupPassword') != val) {
//         return "Your passwords do no match";
//         }
//     },
// })} placeholder="CONFIRM PASSWORD" type="password" />
// {errors.confirmSignupPass && <p id='errorform'>{errors.confirmSignupPass?.message}</p>}
// <button disabled={!isDirty || !isValid} className=" disabled:bg-gray-500 disabled:hover:text-slate-900  bg-blue-600 rounded-sm transition-all duration-500 min-w-[80px] mx-auto font-semibold text-slate-900 hover:text-blue-600 hover:bg-slate-900 cursor-pointer" type="submit">Submit</button>
// </form>
// }


// {Action == 'login' ? 
//     <p onClick={funcAction} className=" italic underline  underline-offset-2 text-center w-fit min-w-[80px]  overflow-hidden mx-auto text-sm font-semibold font-mono mt-[5%] cursor-pointer">Sign-Up</p>                
// :
//     <p onClick={funcAction} className=" italic underline  underline-offset-2 text-center w-fit min-w-[80px] overflow-hidden mx-auto text-sm font-semibold font-mono mt-[5%] cursor-pointer">Log-in</p>                
// }

