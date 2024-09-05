import _ from 'lodash';
// import Print from './print';

function component() {
  // craeate element for image
  // const element = document.querySelector('img');
  // element.src = Icon;

  // // add image to DOM
  // const myName = document.querySelector('.text');
  // const text = document.createTextNode('Hello, World!');
  // myName.appendChild(text);

  // return myName;

  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello, World!');
  return element;
}

// component();
document.body.appendChild(component());
