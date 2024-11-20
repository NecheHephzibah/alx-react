//  return the value of the object at the defined path
import accessImmutableObject from './2-nested';

const obj = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

const arr = ['name', 'first'];

console.log(accessImmutableObject(obj, arr));

// Guillaume
