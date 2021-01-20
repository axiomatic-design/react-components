import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

const rootContainerId = 'axiomatic-playground';

const container =
  document.getElementById(rootContainerId) ?? createContainer(document.body);

render(<App />, container);

function createContainer(targetParent: Element) {
  const newContainer = document.createElement('div');
  newContainer.id = rootContainerId;
  targetParent.appendChild(newContainer);
  return newContainer;
}
