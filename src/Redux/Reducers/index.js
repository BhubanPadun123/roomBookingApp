import {SignUpReducer,LoginReducer,ResetPasswordReducer,UserDetailsReducer} from "./UserReducer"
import { RoomRegisReducer,GetRoomListReducer ,GoBookingRoomReducer,BookedRoomReducer} from "./RoomReducer"
import { RoomImgReducer } from "./UploadImg"
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    signUp:SignUpReducer,
    login:LoginReducer,
    passwordReset:ResetPasswordReducer,
    userDetails: UserDetailsReducer,
    roomImgRedu:RoomImgReducer,
    roomRegister:RoomRegisReducer,
    roomList: GetRoomListReducer,
    goBooking:GoBookingRoomReducer,
    bookedList:BookedRoomReducer
})

export default rootReducer