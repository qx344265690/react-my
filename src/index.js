import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter ,Switch } from 'react-router-dom'; //路由
import { renderRoutes } from 'react-router-config'; //路由插件
import routers from './routers/router.js' //路由
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers.js'
import { createLogger } from 'redux-logger'
//创建一个初始化的state
  var initState = {
    card:{
      name:'jack',
      picture:'a.jpg'
    },
    dialog:{
      status:false
    }
  }
  
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









//<Route path="/" exact component={Sign}/>
//<Route path="/index/:id"  component={Index}/>
//<Route path="/app/:id"  component={App}/>
//<Route path="/pass" component={Pass}/>