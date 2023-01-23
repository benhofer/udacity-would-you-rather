let users = {
  scarlett: {
    id: "scarlett",
    name: "Scarlett",
    active: false,
    avatar: "scarlett.png",
    numvotes: 4,
    numquestions: 2,
    votes: {
      "8xf0y6ziyjabvozdd253nd": "case1",
      "6ni6ok3ym7mf1p33lnez": "case2",
      am8ehyc8byjqgar0jgpub9: "case2",
      loxhs1bqm25b708cmbf3g: "case2",
    },
  },
  tom: {
    id: "tom",
    name: "Tom",
    active: false,
    avatar: "tom.png",
    votes: {
      vthrdm985a262al8qx3do: "case1",
      xj352vofupe1dqz9emx13r: "case2",
    },
    numvotes: 2,
    numquestions: 2,
  },
  richard: {
    id: "richard",
    name: "richard",
    active: false,
    avatar: "richard.png",
    votes: {
      xj352vofupe1dqz9emx13r: "case1",
      vthrdm985a262al8qx3do: "case2",
      "6ni6ok3ym7mf1p33lnez": "case2",
    },
    numvotes: 3,
    numquestions: 2,
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "scarlett",
    description: "Memory",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863845,
    case1: {
      votes: ["scarlett"],
      numvotes: 1,
      text: "have horrible short term memory",
    },
    case2: {
      votes: [],
      numvotes: 0,
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "richard",
    description: "Superheroes",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863846,
    case1: {
      votes: [],
      numvotes: 0,
      text: "become a superhero",
    },
    case2: {
      votes: ["richard", "scarlett"],
      numvotes: 2,
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "scarlett",
    description: "Super Powers",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863847,
    case1: {
      votes: [],
      numvotes: 0,
      text: "be telekinetic",
    },
    case2: {
      votes: ["scarlett"],
      numvotes: 1,
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tom",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863848,
    description: "Coding Skills",
    case1: {
      votes: [],
      numvotes: 0,
      text: "be a front-end developer",
    },
    case2: {
      votes: ["scarlett"],
      numvotes: 1,
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tom",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863849,
    description: "Finders Keepers",

    case1: {
      votes: ["tom"],
      numvotes: 1,
      text: "find $50 yourself",
    },
    case2: {
      votes: ["richard"],
      numvotes: 1,
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "richard",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ts: 1567905863850,
    description: "Programming Languages",
    case1: {
      votes: ["richard"],
      numvotes: 1,
      text: "write JavaScript",
    },
    case2: {
      votes: ["tom"],
      numvotes: 1,
      text: "write Swift",
    },
  },
};

export function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    ts: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };
      users = {
        ...users,
      };
      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
