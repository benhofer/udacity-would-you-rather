import {
  LOGIN
 } from '../constants/constants'
 
 const initialState = [{
   id: 1,
   username: 'Ben',
   active: false,
   votes: [
     {
       questionid: 1,
       vote: 'case2'
     },
     {
       questionid: 2,
       vote: 'case1'
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
    },
    {
      questionid: 2,
      vote: 'case1'
    }
  ]
 },{
   id: 3,
   username: 'Kate',
   active: false,
   votes: [
    {
      questionid: 2,
      vote: 'case1'
    }
  ]
 },{
  id: 4,
  username: 'Lauren',
  active: false,
  votes: []
}];
 
 let newstate;
 
 export default function users(state = initialState, action) {
   switch (action.type) {

     case 'LOGIN':
      newstate = initialState;
      newstate.map(user => {
        action.username === user.username ? user.active = true : user.active = false;
      })
      console.log(newstate);
      return newstate;
 
     default: return state;

   }
 }