const initialState = '';

export const netinforeducer = (state=initialState, action) =>{
if(action.type === 'ipundefined'){
    return action.payload;
}
if(action.type === 'signupwith'){
    return action.payload;
}
return state;
}