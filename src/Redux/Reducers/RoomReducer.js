import * as actionTypes from "../ActionTypes/index"


const initialRoomState = {
    room_resgister_statue: "",
    room_resgister_response: [],
    room_resgister_error: ""
}

const RoomRegisReducer = (state = initialRoomState, action) => {
    switch (action.type) {
        case actionTypes.ROOM_REGISTER_STATUS:
            state = [
                {
                    room_resgister_statue: "started",
                    room_resgister_response: [],
                    room_resgister_error: ""
                }
            ]
            return state;
        case actionTypes.ROOM_REGISTER_RESPONSE:
            state = [
                {
                    room_resgister_statue: "success",
                    room_resgister_response: action.payload,
                    room_resgister_error: ""
                }
            ]
            return state;
        case actionTypes.ROOM_REGISTER_ERROR:
            state = [
                {
                    room_resgister_statue: "failed",
                    room_resgister_response: [],
                    room_resgister_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}

const roomListInitialState = {
    room_list_status: "",
    room_list_response: [],
    room_list_error: ""
}

const GetRoomListReducer = (state = roomListInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ROOM_LIST:
            state = [
                {
                    room_list_status: "started",
                    room_list_response: [],
                    room_list_error: ""
                }
            ]
            return state
        case actionTypes.GET_ALL_ROOM_RESPONSE:
            state = [
                {
                    room_list_status: "success",
                    room_list_response: action.payload,
                    room_list_error: ""
                }
            ]
            return state
        case actionTypes.GET_ALL_ROOM_ERROR:
            state = [
                {
                    room_list_status: "failed",
                    room_list_response: [],
                    room_list_error: action.payload
                }
            ]
            return state;
        default:
            return state
    }
}

const bookingRoomInitialState = {
    booking_room_status: "",
    booking_room_response: [],
    booking_room_error: ""
}

const GoBookingRoomReducer = (state = bookingRoomInitialState, action) => {
    switch (action.type) {
        case actionTypes.BOOKING_ROOM_STATUS:
            state = [
                {
                    booking_room_status: "started",
                    booking_room_response: [],
                    booking_room_error: ""
                }
            ]

            return state
        case actionTypes.BOOKING_ROOM_RESPONSE:
            state = [
                {
                    booking_room_status: "success",
                    booking_room_response: action.payload,
                    booking_room_error: ""
                }
            ]

            return state
        case actionTypes.BOOKING_ROOM_ERROR:
            state = [
                {
                    booking_room_status: "failed",
                    booking_room_response: [],
                    booking_room_error: action.payload
                }
            ]

            return state
        default:
            return state
    }
}

const bookedRoomInitialState = {
    booked_room_status: "",
    booked_room_response: [],
    booked_room_error: ""
}

const BookedRoomReducer = (state=bookedRoomInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKED_ROOM_STATUS:
            state = [
                {
                    booked_room_status: "startd",
                    booked_room_response: [],
                    booked_room_error: ""
                }
            ]

            return state
        case actionTypes.GET_BOOKED_ROOM_RESPONSE:
            state = [
                {
                    booked_room_status: "success",
                    booked_room_response: action.payload,
                    booked_room_error: ""
                }
            ]

            return state
        case actionTypes.GET_BOOKED_ROOM_ERROR:
            state = [
                {
                    booked_room_status: "failed",
                    booked_room_response: [],
                    booked_room_error: action.payload
                }
            ]

            return state
        default:
            return state
    }
}

export {
    RoomRegisReducer,
    GetRoomListReducer,
    GoBookingRoomReducer,
    BookedRoomReducer
}