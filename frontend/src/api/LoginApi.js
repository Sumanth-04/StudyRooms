import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});
export const userId = payload =>api.post('/userId', payload);
export const SignUp = payload => api.post('/sign', payload);
export const LoginID = payload => api.post('/login', payload);
export const createRoom = payload => api.post('/rooms', payload);
export const createBRooms = payload=> api.post('BRooms',payload);
export const getRooms = payload => api.post('/getRooms',payload);
export const joinRoom =payload=> api.post('/joinRoom',payload);


const LoginApi = {
    SignUp,
    LoginID,
};

export const userIdApi ={
    userId,
};
export const SignUpApi = {
    SignUp,
    LoginID,
};
export const createRoomApi = {
    createRoom,
    createBRooms,
};
  
export const getRoomApi = {
    joinRoom,
    getRooms,
};
export default LoginApi;