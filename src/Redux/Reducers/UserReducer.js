import * as actionTypes from "../ActionTypes/index"


const SignUpInitialState = {
    signup_status: "",
    signup_response: [],
    signup_error: ""
}

export const SignUpReducer = (state = SignUpInitialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_STATUS:
            state = [
                {
                    signup_status: "started",
                    signup_response: [],
                    signup_error: ""
                }
            ]
            return state
        case actionTypes.SIGNUP_RESPONSE:
            state = [
                {
                    signup_status: "success",
                    signup_response: action.payload,
                    signup_error: ""
                }
            ]
            return state
        case actionTypes.SIGNUP_ERROR:
            state = [
                {
                    signup_status: "error",
                    signup_response: [],
                    signup_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}

const loginInitialState = {
    login_status: "",
    login_response: [],
    login_error: ""
}

export const LoginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_STATUS:
            state = [
                {
                    login_status: "started",
                    login_response: [],
                    login_error: ""
                }
            ]
            return state
        case actionTypes.LOGIN_RESPONSE:
            state = [
                {
                    login_status: "success",
                    login_response: action.payload,
                    login_error: ""
                }
            ]
            return state
        case actionTypes.LOGIN_ERROR:
            state = [
                {
                    login_status: "failed",
                    login_response: [],
                    login_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}

const passwordResetInitialState = {
    reset_password_status: "",
    reset_password_response: [],
    reset_password_error: ""
}

export function ResetPasswordReducer(state = passwordResetInitialState, action) {
    switch (action.type) {
        case actionTypes.RESET_PASSWORD_STATUS:
            state = [
                {
                    reset_password_status: "started",
                    reset_password_response: [],
                    reset_password_error: ""
                }
            ]
            return state
        case actionTypes.RESET_PASSWORD_RESPONSE:
            state = [
                {
                    reset_password_status: "success",
                    reset_password_response: action.payload,
                    reset_password_error: ""
                }
            ]
            return state
        case actionTypes.RESET_PASSWORD_ERROR:
            state = [
                {
                    reset_password_status: "failed",
                    reset_password_response: [],
                    reset_password_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}

const userInitialState = {
    get_user_status: "",
    get_uer_response: [],
    get_user_error: ""
}

export const UserDetailsReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_DETAILES:
            state = [
                {
                    get_user_status: "started",
                    get_uer_response: [],
                    get_user_error: ""
                }
            ]
            return state
        case actionTypes.GET_USER_RESPONSE:
            state = [
                {
                    get_user_status: "success",
                    get_uer_response: action.payload,
                    get_user_error: ""
                }
            ]
            return state
        case actionTypes.GET_USER_ERROR:
            state = [
                {
                    get_user_status: "failed",
                    get_uer_response: [],
                    get_user_error: action.payload
                }
            ]
            return state
        default:
            return state
    }
}