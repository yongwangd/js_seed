import { curry } from 'ramda';

export { curry };
const add = (...params) => params;

add(
  1,
  2,
  3,
  4,
  5,
  6.9999999999999999999999993333333,
  7.888888888888888888888888888888333,
  3.44444444444444,
  5.444444444444,
);
