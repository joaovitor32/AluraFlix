import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';

import CadastroVideo from './pages/cadastro/Video/index.js' 

import { Route, BrowserRouter, Switch } from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => {
  return (
    <div>
      Pagina404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/cadastro/video' component={CadastroVideo} />
        <Route path='/cadastro/categoria' component={CadastroCategoria} />
        <Route component={Pagina404}/>
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

