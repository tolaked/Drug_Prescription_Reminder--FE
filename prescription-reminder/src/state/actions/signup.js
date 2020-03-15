import * as types from '../constants/user'

export const signuPrequest = payload =>({
    type:types.SIGNUP_REQUEST,
    payload
})

export const signupSuccess = payload =>({
    type: types.SIGNUP_SUCCESS,
    payload
})

export const signupError = payload =>({
    type: types.SIGNUP_ERROR,
    payload
})
