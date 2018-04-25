import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter ,Route ,Switch } from 'react-router-dom';

//登录页面
import Sign from './constants/signIn/Sign.js'
//注册页面
import Pass from './constants/password/Pass.js'

import App from './constants/app/App.js';
import Index from './constants/index/index.js'



ReactDOM.render(
  <div>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Sign}/>
              <Route path="/index"  component={Index}/>
              <Route path="/app/:id"  component={App}/>
              <Route path="/pass" component={Pass}/>
          </Switch>
      </BrowserRouter>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
