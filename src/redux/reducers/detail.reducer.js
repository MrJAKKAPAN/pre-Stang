import { ADD } from "../constant";

const initialState = {
    result:[]
}

export default ( state = initialState, { type, payload}) => {
    switch(type) {
        case ADD : return {...state, result:payload}
        default : return state;
    }
}