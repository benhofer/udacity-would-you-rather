import {
  LOGIN
 } from '../constants/constants'
 
 const initialState = {
   activeuser: 'Ben',
   users: [{
    id: 1,
    username: 'Ben',
    active: false,
    votes: [
      {
        questionid: 1,
        vote: 'case2'
      }
    ]
  },{
    id: 2,
    username: 'Julie',
    active: false,
    votes: [
      {
        questionid: 1,
        vote: 'case2'
      }
    ]
  },{
    id: 3,
    username: 'Kate',
    active: false,
    votes: [
      {
        questionid: 1,
        vote: 'case1'
      }
    ]
  },{
    id: 4,
    username: 'Lauren',
    active: false,
    votes: []
  }]};
 
 let newstate;
 
 export default function users(state = initialState, action) {
   switch (action.type) {

     case 'LOGIN':
      newstate = initialState;
      newstate.activeuser = action.username;
      return newstate;
 
     default: return state;

   }
 }