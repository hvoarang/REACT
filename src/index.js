import React from 'react';
import { render } from 'react-dom';

const elem1 = <span>Hello</span>;
const elem2 = <span>world</span>;

const element = React.createElement('div', { a: 5, b: 10 }, [
  elem1,
  ' ',
  elem2,
]);

const jsxElement = <div>Hello World</div>;
console.log(jsxElement);

console.log(element);
render(element, document.querySelector('#root'));

const arr = [112, 22, 3, 4, 5, 6, 7];
const newArr = arr.slice(0, 2);

console.log(newArr);
console.log(`arrey is  ${arr}`);

let ary = [1, 2, 3];
