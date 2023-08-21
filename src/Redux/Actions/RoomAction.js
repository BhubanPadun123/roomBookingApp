import * as actionTypes from "../ActionTypes/index"
import axios from "axios"



const URL = "http://localhost:8081"
const PURL = "https://onlineroombooking.onrender.com"


const RoomRegisteraction=(props)=>async(dispatch)=>{
    const {log} = console
    try{
        dispatch({
            type:actionTypes.ROOM_REGISTER_STATUS,
            payload:{}
        })

        const response = await axios.post(`${PURL}/registerRoom`,props)

        if(response){
            dispatch({
                type:actionTypes.ROOM_REGISTER_RESPONSE,
                payload:response.data
            })
        }else{
            dispatch({
                type:actionTypes.ROOM_REGISTER_ERROR,
                payload:"Error"
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.ROOM_REGISTER_ERROR,
            payload:error
        })
    }
}

const GetAllRoomListAction=()=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.GET_ALL_ROOM_LIST,
            payload:{}
        })
        
        const response = await axios.get(`${PURL}/getroom`)
        if(response){
            dispatch({
                type:actionTypes.GET_ALL_ROOM_RESPONSE,
                payload:response.data
            })
        }else{
            dispatch({
                type:actionTypes.GET_ALL_ROOM_ERROR,
                payload:"Error"
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.GET_ALL_ROOM_ERROR,
            payload:error
        })
    }
}

const GoBookingRoomAction=(props)=>async(dispatch)=>{
   // console.log("From action===>",props.props)
    try{
        dispatch({
            type:actionTypes.BOOKING_ROOM_STATUS,
            payload:{}
        })

        const userEmail = localStorage.getItem('userEmail')

        if(userEmail){
            const response = await axios.post(`${PURL}/go_booking/${userEmail}`,props.props)

            if(response){
                dispatch({
                    type:actionTypes.BOOKING_ROOM_RESPONSE,
                    payload:response.data
                })
            }else{
                dispatch({
                    type:actionTypes.BOOKING_ROOM_ERROR,
                    payload:"Error"
                })
            }
        }else{
            dispatch({
                type:actionTypes.BOOKING_ROOM_ERROR,
                payload:"User does not exist"
            })
        }
    }catch(error){
        console.log("Error==>",error)
        dispatch({
            type:actionTypes.BOOKING_ROOM_ERROR,
            payload:error
        })
    }
}

const GetBookedRoomAction=(props) =>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.GET_BOOKED_ROOM_STATUS,
            payload:{}
        })

        const userEmail = localStorage.getItem('userEmail')
        if(userEmail){
            const response = await axios.get(`${PURL}/get_booking_room/${userEmail}`)

            if(response){
                dispatch({
                    type:actionTypes.GET_BOOKED_ROOM_RESPONSE,
                    payload:response.data
                })
            }else{
                dispatch({
                    type:actionTypes.GET_BOOKED_ROOM_ERROR,
                    payload:"Error"
                })
            }
        }else{
            dispatch({
                type:actionTypes.GET_BOOKED_ROOM_ERROR,
                payload:"User does not exist!!!!"
            })
        }
    }catch(error){
        dispatch({
            type:actionTypes.GET_BOOKED_ROOM_ERROR,
            payload:error
        })
    }
}

export{
    RoomRegisteraction,
    GetAllRoomListAction,
    GoBookingRoomAction,
    GetBookedRoomAction
}