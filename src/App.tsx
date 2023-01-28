import React from 'react';
import { Header, Content } from './components/index';
import 'normalize.css';
import './assets/fontello/css/awethentique.css';
import './style/style.less';

const App = () => {
  return (
    <div className="app" data-testid="my-app">
      <Header />
      <Content />
    </div>
  );
};

export default App;
