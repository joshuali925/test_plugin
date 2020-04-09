// import { htmlIdGenerator } from '../../../../src/services';

// export const makeId = () => htmlIdGenerator()();

// uuid seems to have conflicts with Kibana
// import uuid from 'uuid';


// temporary solution
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



function htmlIdGenerator(idPrefix: string = '') {
  // const staticUuid = uuid.v1();
  const staticUuid = uuidv4();
  return (idSuffix: string = '') => {
    const prefix = `${idPrefix}${idPrefix !== '' ? '_' : 'i'}`;
    const suffix = idSuffix ? `_${idSuffix}` : '';
    // return `${prefix}${suffix ? staticUuid : uuid.v1()}${suffix}`;
    return `${prefix}${suffix ? staticUuid : uuidv4()}${suffix}`;
  };
}

export const makeId = () => htmlIdGenerator()();

export const makeList = (number, start = 1) => Array.from({ length: number }, (v, k) => k + start).map(el => {
  return {
    content: `thing${el}`,
    id: makeId()
  };
});