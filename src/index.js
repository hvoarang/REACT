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
