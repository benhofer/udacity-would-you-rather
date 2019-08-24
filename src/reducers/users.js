import {
  LOGIN,
  VOTE, 
  ADD_QUESTION
 } from '../constants/constants'
 
 const initialState = {
  activeuser: '',
  users: [
   {
      id: 'sarahedo',
      name: 'Sarah Edo',
      active: false,
      avatar: 'julie.png',
      numvotes: 4,
      numquestions: 2,
      votes: {
        "8xf0y6ziyjabvozdd253nd": 'case1',
        "6ni6ok3ym7mf1p33lnez": 'case2',
        "am8ehyc8byjqgar0jgpub9": 'case2',
        "loxhs1bqm25b708cmbf3g": 'case2'
      }
    },
    {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      active: false,
      avatar: 'ben.png',
      votes: {
        "vthrdm985a262al8qx3do": 'case1',
        "xj352vofupe1dqz9emx13r": 'case2',
      },
      numvotes: 2,
      numquestions: 2
    },
    {
      id: 'johndoe',
      name: 'John Doe',
      active: false,
      avatar: 'john.png',
      votes: {
        "xj352vofupe1dqz9emx13r": 'case1',
        "vthrdm985a262al8qx3do": 'case2',
        "6ni6ok3ym7mf1p33lnez": 'case2'
      },
      numvotes: 3,
      numquestions: 2
    }
  ]};
 
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
      newuser = newstate.users.filter((u) => action.author === u.name);
      newstateusers = newstate.users.filter((u) => action.author !== u.name);
      newuser[0].numquestions++;

      console.log('questions asked');
      console.log(newuser[0].numquestions);

      return {
        activeuser: newstate.activeuser,
        users: [
          newuser[0],
          ...newstateusers
        ]  
      }

    case VOTE: 
      newstate = state;
      newuser = newstate.users.filter((u) => action.user === u.name);
      console.log(newuser);
      newstateusers = newstate.users.filter((u) => action.user !== u.name);
      newuser[0].votes[action.id] = action.vote;
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