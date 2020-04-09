// import { htmlIdGenerator } from '../../../../src/services';

// export const makeId = () => htmlIdGenerator()();

import uuid from 'uuid';

function htmlIdGenerator(idPrefix: string = '') {
  const staticUuid = uuid.v1();
  return (idSuffix: string = '') => {
    const prefix = `${idPrefix}${idPrefix !== '' ? '_' : 'i'}`;
    const suffix = idSuffix ? `_${idSuffix}` : '';
    return `${prefix}${suffix ? staticUuid : uuid.v1()}${suffix}`;
  };
}

export const makeId = () => htmlIdGenerator()();

export const makeList = (number, start = 1) => Array.from({ length: number }, (v, k) => k + start).map(el => {
  return {
    content: `thing${el}`,
    id: makeId()
  };
});