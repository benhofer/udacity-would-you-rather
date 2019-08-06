import {
  LOGIN,
  VOTE, 
  ADD_QUESTION
 } from '../constants/constants'
 
 const initialState = {
   activeuser: 'Ben',
   users: [{
    id: 1,
    username: 'Ben',
    active: false,
    avatar: 'ben.png',
    numvotes: 1,
    numquestions: 0,
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
    numvotes: 1,
    numquestions: 0, 
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
    numvotes: 0,
    numquestions: 0,
    votes: []
  },{
    id: 4,
    username: 'John',
    avatar: 'john.png',
    active: false,
    numvotes: 0,
    numquestions: 0,
    votes: []
  }]};
 
 let newstate;
 let newuser;
 let newstateusers;
 
 export default function users(state = initialState, action) {
   switch (action.type) {

    case LOGIN:
      newstate = state;
      newstate.activeuser = action.username;
      return newstate;
    
    case ADD_QUESTION: 
      newstate = state;
      newuser = newstate.users.filter((u) => action.author === u.username);
      newstateusers = newstate.users.filter((u) => action.author !== u.username);
      newuser[0].numquestions++;

      return {
        activeuser: newstate.activeuser,
        users: [
          newuser[0],
          ...newstateusers
        ]  
      }

    case VOTE: 
      newstate = state;
      newuser = newstate.users.filter((u) => action.user === u.username);
      newstateusers = newstate.users.filter((u) => action.user !== u.username);
      newuser[0].votes.push({questionid: action.id, vote: action.vote});
      newuser[0].numvotes++;

      return {
        activeuser: newstate.activeuser,
        users: [
          newuser[0],
          ...newstateusers
        ]  
      }
      default: return state;

   }
 }