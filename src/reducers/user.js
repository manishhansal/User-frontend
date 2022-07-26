import {
  LOGIN,
  GET_ALL_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/types";

const initialState = []

function userReducer(users = initialState, action) {
    const {type, payload} = action;
  switch (type) {
      case LOGIN:
          return payload;
        case CREATE_USER:
            return [users, payload]                        
      case GET_ALL_USERS:
          return payload;
        case UPDATE_USER:
            return users.map((user)=>{
                if(user.id === payload.id) {
                    return {...users,...payload}
                } else {
                    return users
                }
            });
        case DELETE_USER:
            return users.filter(({id})=>id !== payload.id)
        default:
            return users;
    }
}
export default userReducer;