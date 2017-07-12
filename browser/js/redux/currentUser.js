import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const setCurrentUser = currentUser => ({type: SET_CURRENT_USER, user})


/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user

    default:
      return currentUser;
  }
}


/* ------------   THUNK CREATORS     ------------------ */


export const setCurrentUserThunk = user => dispatch => {
  console.log('user in thunk: ', user)
  axios.post('api/users/login', user)
       .then(res => {
          console.log(res)
          dispatch(setCurrentUser(res.data))
          }
        )
       .catch(err => console.error(`Login for user unsuccesful`, err));
};

