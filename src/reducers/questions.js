import {
  ADD_QUESTION,
  VOTE
} from '../constants/constants'

const initialState = [{
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  description: 'Memory',
  time: new Date().toString(),
  case1: {
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
  },
  case2: {
    votes: [],
    text: 'have horrible long term memory'
  }
}, {
  id: '6ni6ok3ym7mf1p33lnez',
  author: 'johndoe',
  description: 'Superheroes',
  time: new Date().toString(),
  case1: {
    votes: [],
    text: 'become a superhero',
  },
  case2: {
    votes: ['johndoe', 'sarahedo'],
    text: 'become a supervillain'
  }
}, {
  id: 'am8ehyc8byjqgar0jgpub9',
  author: 'sarahedo',
  description: 'Super Powers',
  time: new Date().toString(),
  case1: {
    votes: [],
    text: 'be telekinetic',
  },
  case2: {
    votes: ['sarahedo'],
    text: 'be telepathic'
  }
},
{
  id: 'loxhs1bqm25b708cmbf3g',
  author: 'tylermcginnis',
  time: new Date().toString(),
  description: 'Coding Skills',
  case1: {
    votes: [],
    text: 'be a front-end developer',
  },
  case2: {
    votes: ['sarahedo'],
    text: 'be a back-end developer'
  }
},
{
  id: 'vthrdm985a262al8qx3do',
  author: 'tylermcginnis',
  time: new Date().toString(),
  description: 'Finders Keepers',

  case1: {
    votes: ['tylermcginnis'],
    text: 'find $50 yourself',
  },
  case2: {
    votes: ['johndoe'],
    text: 'have your best friend find $500'
  }
},
{
  id: 'xj352vofupe1dqz9emx13r',
  author: 'johndoe',
  time: new Date().toString(),
  description: 'Programming Languages',

  case1: {
    votes: ['johndoe'],
    text: 'write JavaScript',
  },
  case2: {
    votes: ['tylermcginnis'],
    text: 'write Swift'
  }
}];

export default function questions(state = initialState, action) {

  switch (action.type) {

    case ADD_QUESTION:
      let newquestion = {
        id: action.id,
        description: action.title,
        time: new Date().toString(),
        author: action.author,
        case1: {
          text: action.case1,
          numvotes: 0,
          votes: []
        },
        case2: {
          text: action.case2,
          numvotes: 0,
          votes: []
        }
      }
      return [...state, newquestion];

    case VOTE:
      let newstate = state.filter((q) => q.id !== action.id);
      let newquestionstate = state.filter((q) => q.id === action.id)

      switch (action.vote) {
        case 'case1':
          newquestionstate[0].case1.numvotes++;
          newquestionstate[0].case1.votes.push(action.user);
          break;
        case 'case2':
          newquestionstate[0].case2.numvotes++;
          newquestionstate[0].case2.votes.push(action.user);
      }

      return [...newstate, ...newquestionstate];

    default: return state;
  }
}

