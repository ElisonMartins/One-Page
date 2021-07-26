import React from 'react';
import ReactDOM from 'react-dom';

import Head from './Component/Head';
import CardTop from './Component/CardTop';
import CardBot from './Component/CardBot';
import Form from './Component/Form';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <CardTop />
    <CardBot />
    <Form />
    
  </React.StrictMode>,
  document.getElementById('root')
);

