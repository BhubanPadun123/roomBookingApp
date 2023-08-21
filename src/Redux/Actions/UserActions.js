import * as actionTypes from "../ActionTypes/index"
import axios from "axios"

const URL = "http://localhost:8081"
const PURL = "https://onlineroombooking.onrender.com"
export const SignUp=(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.SIGNUP_STATUS,
            payload:{}
        })
    
        const response = await axios.post(`${PURL}/UserSignup`,props)
        if(response){
            dispatch({
                type:actionTypes.SIGNUP_RESPONSE,
                payload:response.data
            })
        }else{
            dispatch({
                type:actionTypes.SIGNUP_ERROR,
                payload:"error"
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.SIGNUP_ERROR,
            payload:error
        })
    }
    
}

export const Login =(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.LOGIN_STATUS,
            payload:{}
        })

        const response = await axios.get(`${PURL}/login/${props.email}/${props.password}`,props)
        if(response){
            console.log("==>",response.data.data.gmail)
           localStorage.setItem("userEmail",response.data.data.gmail)
           localStorage.setItem("userName",response.data.data.fullName)
           localStorage.setItem('contact',response.data.data.contact)
          dispatch({
            type:actionTypes.LOGIN_RESPONSE,
            payload:response.data
          })
        }else{
            dispatch({
                type:actionTypes.LOGIN_ERROR,
                payload:"error"
            })
        }
    }catch(error){
        console.log("Error==>",error)
        dispatch({
            type:actionTypes.LOGIN_ERROR,
            payload:error
        })
    }
}

export const ResetPasswordAction=(props)=> async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.RESET_PASSWORD_STATUS,
            payload:{}
        })

        const response = await axios.put(`${PURL}/reset`,props)

        if(response){
            dispatch({
                type:actionTypes.RESET_PASSWORD_RESPONSE,
                payload:response.data
            })
        }else{
            dispatch({
                type:actionTypes.RESET_PASSWORD_ERROR,
                payload:"error"
            })
        }
    }catch(error){
        console.log("Error==>",error)
        dispatch({
            type:actionTypes.RESET_PASSWORD_ERROR,
            payload:error
        })
    }
}

export const GetUserDetailes =()=> async(dispatch)=>{
    try{
        const userEmail = localStorage.getItem("userEmail")

        if(userEmail){
            dispatch({
                type:actionTypes.GET_USER_DETAILES,
                payload:{}
            })

            const response = await axios.get(`${PURL}/user/${userEmail}`)

            if(response){
                dispatch({
                    type:actionTypes.GET_USER_RESPONSE,
                    payload:response.data
                })
            }else{
                dispatch({
                    type:actionTypes.GET_USER_ERROR,
                    payload:{message:"Error"}
                })
            }
        }
    }catch(error){
        console.log("Error===>",error)
        dispatch({
            type:actionTypes.GET_USER_ERROR,
            payload:{error}
        })
    }
}