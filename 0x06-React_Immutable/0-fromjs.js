// function getImmutableObject that accepts object as a parameter
// and converts it into an immutable Map using fromJS of
// the Immutable.js library
import { fromJS } from 'immutable';

const getImmutableObject = (obj) => fromJS(obj);

export default getImmutableObject;
