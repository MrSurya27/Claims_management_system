import { errorActions } from "./error-slice";
import { userAction } from "./user-slice";
import axios from "axios";

export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: { "content-type": "application/json" },
            };

            const { data } = await axios.post(`https://claims-management-system-2.onrender.com/auth/login`, { email, password }, config);
            dispatch(userAction.loginUser({
                user: data.user,
                isAuthenticated: true
            }));

        } catch (error) {
            dispatch(errorActions.showError({
                message: error.response.data.message
            }));
        }
    }
};

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            await axios.get(`https://claims-management-system-2.onrender.com/auth/logout`);
            dispatch(userAction.logoutUser({
                message: "success"
            }));
        } catch (error) {
            dispatch(errorActions.showError({
                message: error.response.data.message
            }));
        }
    }
};

export const registerUser = ({ email, name, password }) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: { "content-type": "application/json" },
            };

            const { data } = await axios.post(`https://claims-management-system-2.onrender.com/auth/register`, { name, email, password }, config);
            dispatch(userAction.registerUser({
                user: data.user
            }));
        } catch (error) {
            dispatch(errorActions.showError({
                message: error.response.data.message
            }));
        }
    }
};


export const clearErrors = () => {
    return async (dispatch) => {
        dispatch(errorActions.clearErrors({
            error:null
        }))
    }
    
}
