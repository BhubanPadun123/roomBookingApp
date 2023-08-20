import * as actionTypes from "../ActionTypes/index"


const uploadImgInitialState = {
    upload_img_status: "",
    upload_img_response: [],
    upload_img_error: ""
}

export const RoomImgReducer = (state = uploadImgInitialState, action) => {
    switch (action.type) {
        case actionTypes.UPLOAD_IMAGE_STATUS:
            state = [
                {
                    upload_img_status: "Started",
                    upload_img_response: [],
                    upload_img_error: ""
                }
            ]
            return state
        case actionTypes.UPLOAD_IMAGE_RESPONSE:
            state =[
                {
                    upload_img_status: "success",
                    upload_img_response: action.payload,
                    upload_img_error: ""
                }
            ]
            return state
        case actionTypes.UPLOAD_IMAGE_ERROR:
            state =[
                {
                    upload_img_status: "failed",
                    upload_img_response: [],
                    upload_img_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}