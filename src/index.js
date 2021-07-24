import React from 'react';
import ReactDOM from 'react-dom';

import Head from './Component/Head';
import CardTop from './Component/CardTop';
import CardBot from './Component/CardBot';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <CardTop />
    <CardBot />
    
  </React.StrictMode>,
  document.getElementById('root')
);

