import { ADD_USER_REDUX, REMOVE_USER_REDUX } from "../actions/userActions";

const initValues = {
    userId: 7,
    firstName: "Kaan",
    lastName: "Kaplan",
    email: "kaankaplan@gmail.com"
}

export default function userReducer(state={}, {type, payload}){

    switch (type) {
        case ADD_USER_REDUX:
            
            return {
                ...payload
            }
        case REMOVE_USER_REDUX:
            
            return {

            }
        default:
            return state;
    }
}