import React from 'react';
import ReactDOM from 'react-dom/client';
import { Banner } from './Banner/Banner.js';
import {Andrea} from './Componente/Andrea.js';
import {Menu} from './Menu/Menu.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu></Menu>
    <Banner></Banner>
    <Andrea/>


  </React.StrictMode>
);

