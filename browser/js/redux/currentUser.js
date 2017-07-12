import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = currentUser => ({type: SET_CURRENT_USER, currentUser})
const logoutCurrentUser = () => {type: LOGOUT_CURRENT_USER, {}}


/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.currentUser

    case LOGOUT_CURRENT_USER:
    return action.currentUser

    default:
      return currentUser;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const logoutCurrentUserThunk = () => dispatch => {

  axios.put('api/users/logout')
  .then(res => {
    dispatch(logoutCurrentUser())
  })
  .catch(err => console.log('Log out unsuccesful', err));
}

export const setCurrentUserThunk = user => dispatch => {

  axios.post('api/users/login', user)
       .then(res => {
         console.log(res.data);
          dispatch(setCurrentUser(res.data))
          }
        )
       .catch(err => console.error(`Login for user unsuccesful`, err));
};
