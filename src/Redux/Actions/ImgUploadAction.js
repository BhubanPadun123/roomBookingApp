import * as actionTypes from "../ActionTypes/index"
import axios from "axios"

const URL = "http://localhost:8081"
const PURL = "https://onlineroombooking.onrender.com"
export const RoomImgUploadAction=(props)=>async(dispatch)=>{
    try{
        dispatch({
            type:actionTypes.UPLOAD_IMAGE_STATUS,
            payload:{}
        })

        const formData = new FormData()
        formData.append('image',props.img)

        const response = await axios.post(`${PURL}/uploadRoomImg/${props.imgOwner}`,formData,{
            headers:{'Content-Type':'multipart/form-data'}
        })

        if(response){
            dispatch({
                type:actionTypes.UPLOAD_IMAGE_RESPONSE,
                payload:response.data
            })
        }else{
            dispatch({
                type:actionTypes.UPLOAD_IMAGE_ERROR,
                payload:"error"
            })
        }
    }catch(error){
        console.log("Error====>",error)
        dispatch({
            type:actionTypes.UPLOAD_IMAGE_ERROR,
            payload:error
        })
    }
}