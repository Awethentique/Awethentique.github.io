import 'normalize.css';
import './assets/fontello/css/awethentique.css';
import './style/style.less';

import React from 'react';

import { Content,Header } from './components/index';

const App = () => {
  return (
    <div className="app" data-testid="my-app">
      <Header />
      <Content />
    </div>
  );
};

export default App;
