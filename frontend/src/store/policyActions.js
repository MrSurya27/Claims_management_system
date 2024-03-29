import { policyActions } from "./policies-slice";
import axios from "axios";

export const getAllPolicies = () => {
    return async (dispatch) => {
        try {

            let link = `https://claims-management-system-2.onrender.com/policies`;

        
            const { data } = await axios.get(link);
            dispatch(policyActions.getAllPolicies({
                policies:data.policies||[]
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getAllUserPolicies = () => {
    return async (dispatch) => {
        try {

            let link = `https://claims-management-system-2.onrender.com/user/policies`;


            const { data } = await axios.get(link);
            dispatch(policyActions.getAllUserPolicies({
                policies: data.policies || []
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}


