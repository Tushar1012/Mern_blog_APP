export const LoginStart = (userCreditentials) => ({
    type: 'LOGIN_START',

});
 export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
});
export const LoginFailure = () => ({
    type: 'LOGIN_FAILURE',
});
export const Logout = () => ({
    type: 'LOGOUT',
});

//update

 export const updateStart = (userCreditentials) => ({
    type: 'UPDATE_START',
   
});
export const updateSuccess = () => ({
    type: 'UPDATE_SUCCESS',
    payload: user,
});
export const updateFailure = () => ({
    type: 'UPDATE_FAILURE',
});
