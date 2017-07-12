import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import currentUser from './currentUser';

export default combineReducers({ users, stories, currentUser });
