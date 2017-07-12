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
  axios.post('/api/users/login', user)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Login for user: ${req.body} unsuccesful`, err));
};

