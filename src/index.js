import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

component();
