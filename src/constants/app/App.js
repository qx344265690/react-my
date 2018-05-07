import React, { Component } from 'react';
import logo from '../../logo.svg';
import './app.scss'
import { connect } from 'react-redux'
import Card from './Card'
import Dialog from './Dialog'

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
        <Card />
        <Dialog />
        <button onClick={this.props.changeName}>change name</button>
      <button onClick={this.props.showDialog}>show dialog</button>
      </div>
      
    );
  }
}
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    changeName () {
      console.log('即将改名……')
      dispatch({
        type: 'CHANGE_NAME',
        name: '葬爱'
      })
      console.log('完成改名！')
    },
    showDialog () {
      dispatch({
        type: 'SHOW_DIALOG'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

//
// <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <h1 className="App-title">Welcome to React</h1>
//      </header>
//      
//      <p className="App-intro">
//        To get started, edit <code>src/App.js</code> and save to reload.
//      </p>
//      
//      <p>
//        <button onClick={this.handleclick}>点击跳转到index页面</button>
//      </p>
//      
//      这个参数是:{this.props.match.params.id}
//      
//      <Button type="primary">{this.props.match.params.id}获取传值</Button>