import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoModel from './TodoModel'


var model = new TodoModel('react-todos');

function render() {
  console.log("render callback")
  ReactDOM.render(
    <App model={model} />,
    document.getElementsByClassName('todoapp')[0]
  );
}
window._model = model;
model.subscribe(render);
render();
