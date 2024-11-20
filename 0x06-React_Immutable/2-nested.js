// return the value of the object at the defined path
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObj = fromJS(object);
  return mappedObj.getIn(array, undefined);
}
