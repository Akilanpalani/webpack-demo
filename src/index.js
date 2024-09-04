import './styles/test.scss';
import lowerCase from 'lodash';
import csvData from './data.xml';
import xmlData from './data.csv';

import Icon from './images/avengers.jpg';

// console.log(lowerCase('Hello, world!'));

function component() {
  // craeate element for image
  const element = document.querySelector('img');
  element.src = Icon;

  // add image to DOM
  const myName = document.querySelector('.text');
  const text = document.createTextNode('Hello, World!');
  myName.appendChild(text);

  // Loading Data
  console.log(csvData);
  console.log(xmlData);

  return myName;
}

component();
