
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const M_PLUS = "M_PLUS";
export const M_R= "M_R";
export const M_C= "M_C";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (text) => {
    return({type:CHANGE_OPERATION, payload:text});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const m_plus = () => {
    return({type:M_PLUS});
}
export const m_r = () => {
    return({type:M_R});
}
export const m_c = () => {
    return({type:M_C});
}