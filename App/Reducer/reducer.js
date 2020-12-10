let initialState = {
    ipadr:'',
    iscon:'',
    statusbarcolour:'#2F1A46',
    email:'',
    password:''
}

export const reducer = (state=initialState, action) =>{
if(action.type === 'signinwith'){
    return action.payload;
}
if(action.type === 'signupwith'){
    return action.payload;
}
if(action.type === 'ipundefined'){
    return {ipadr: action.payload.ipadr,iscon:action.payload.iscon,statusbarcolour:action.payload.statusbarcolour}
}
if(action.type === 'reduxloginvalue'){
    return {email:action.payload.email,password:action.payload.password}
}
return state;
}