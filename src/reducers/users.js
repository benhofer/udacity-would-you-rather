import {
  LOGIN
 } from '../constants/constants'
 
 const initialState = {
   activeuser: 'Ben',
   users: [{
    id: 1,
    username: 'Ben',
    active: false,
    avatar: 'ben.png',
    votes: [
      {
        questionid: 123456789,
        vote: 'case2'
      }
    ]
  },{
    id: 2,
    username: 'Julie',
    active: false,
    avatar: 'julie.png',
    votes: [
      {
        questionid: 123456789,
        vote: 'case2'
      }
    ]
  },
  {
    id: 3,
    username: 'Jeremy',
    active: false,
    avatar: 'jeremy.png',
    votes: [
      {
        questionid: 123456789,
        vote: 'case2'
      }
    ]
  },{
    id: 4,
    username: 'John',
    avatar: 'john.png',
    active: false,
    votes: [
      {
        questionid: 123456789,
        vote: 'case2'
      }
    ]
  }]};
 
 let newstate;
 let newuser;
 let newstateusers;
 
 export default function users(state = initialState, action) {
   switch (action.type) {

    case 'LOGIN':
      newstate = initialState;
      newstate.activeuser = action.username;
      return newstate;
 
    case 'VOTE': 
      newstate = initialState;
      newuser = newstate.users.filter((u) => action.user === u.username);
      newstateusers = newstate.users.filter((u) => action.user !== u.username);
      newuser[0].votes.push({questionid: action.id, vote: action.vote});

      return {
        activeuser: initialState.activeuser,
        users: [
          newuser[0],
          ...newstateusers
        ]  
      }
      default: return state;

   }
 }