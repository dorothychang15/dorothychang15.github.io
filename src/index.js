import ReactDOM from 'react-dom';
import React from 'react';

const App = () => {
  return <h1>Hello!</h1>;
};

console.log(document.getElementById('app'));
console.log(document.querySelectorAll('div')[0]);
ReactDOM.render(<App />, document.querySelectorAll('div')[0]);