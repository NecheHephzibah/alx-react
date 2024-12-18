// Create a function named mergeDeeplyElements
import mergeDeeplyElements from 'immutable';

const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
    },
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      },
    },
  },
};

console.log(mergeDeeplyElements(page1, page2));
