import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Button} from 'antd'
import './app.scss'


class App extends Component {
  constructor(props){//函数定义一个类，它是构造函数ES6的
    super(props);//super是关键字，调用父类的构造方法。只有一个理由需要传递props作为super()的参数，那就是你需要在构造函数内使用this.props
    this.handleclick = this.handleclick.bind(this)
  }
  handleclick(){
    this.props.history.push('/index/1')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <p>
          <button onClick={this.handleclick}>点击跳转到index页面</button>
        </p>
        
        这个参数是:{this.props.match.params.id}
        
        <Button type="primary">{this.props.match.params.id}获取传值</Button>
        
      </div>
      
    );
  }
}

export default App;
