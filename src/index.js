import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter ,Switch } from 'react-router-dom'; //路由
import { renderRoutes } from 'react-router-config'; //路由插件
import routers from './routers/router.js' //路由




ReactDOM.render(
  <div>
      <BrowserRouter>
          <Switch>
              {renderRoutes(routers)}
          </Switch>
      </BrowserRouter>
  </div>
  , document.getElementById('root'));
registerServiceWorker();









//<Route path="/" exact component={Sign}/>
//<Route path="/index/:id"  component={Index}/>
//<Route path="/app/:id"  component={App}/>
//<Route path="/pass" component={Pass}/>