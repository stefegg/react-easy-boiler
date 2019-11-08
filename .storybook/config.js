import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
  }
  
  
  configure(loadStories, module);
// configure(require.context('../stories', true, /\.stories\.js$/), module);
