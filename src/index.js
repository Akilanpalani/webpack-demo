// import printMe from './print';

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   btn.innerHTML = 'click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// Dynamic import concept
// function getComponent() {
//   return import('lodash')
//     .then((_) => {
//       const element = document.createElement('div');
//       element.innerHTML = _.join(['Hello', 'webpack'], '');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//   document.bady.appendChild(component);
// });

// async function
async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  element.innerHTML = _join(['Hello', 'webpack'], '');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
