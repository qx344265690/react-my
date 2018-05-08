import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter ,Switch } from 'react-router-dom'; //路由
import { renderRoutes } from 'react-router-config'; //路由插件
import routers from './routers/router.js' //路由
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import initState from './redux/initState.js'
import reducer from './redux/reducers.js' //返回state
import { createLogger } from 'redux-logger'//控制台打印


//在控制台打印出了信息
const logger = createLogger();
//创建store
const store = createStore(reducer,initState,applyMiddleware(logger))
ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
              {renderRoutes(routers)}
          </Switch>
      </BrowserRouter>
    </Provider>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
