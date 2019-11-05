import React from 'react';
import Sidebar from '.';

export function createStory(storiesOf, module) {
  storiesOf('Sidebar', module).add('with default props', () => <Sidebar />);
}