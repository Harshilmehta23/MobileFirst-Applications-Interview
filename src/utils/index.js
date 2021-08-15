export const getToken = () => localStorage.getItem('access-token');

export const setToken = (token) => localStorage.setItem('access-token', token);

export const removeToken = () => localStorage.removeItem('access-token');

export const classNames = (...classNameArr) => classNameArr.join(' ');

const userNameRegEx =  /^[a-z]+$/i;
const passwordRegEx = /^[a-zA-Z0-9]+$/;

export const userNameValidation = (input) => userNameRegEx.test(input);
export const passwordValidation = (input) => passwordRegEx.test(input);