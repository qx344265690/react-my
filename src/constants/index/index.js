  import React from 'react'
  import logo from '../../logo.svg';
  import { Link } from 'react-router-dom'
  import Subnews from '../../components/subnews'
  import ReactMenv from '../../components/ReactMenu'
  
  
  import {Layout} from 'antd';
  import './index.css'
  const { Header, Footer, Sider, Content } = Layout;
  var cookies = require('browser-cookies');
  
 

  export  default class Index extends React.Component {
    constructor(props){
      super(props)
      this.state={
        show:false,
        headerList:{
          name:123,
          list:123,
          line:[{
            'icon':'mail',
            'name':1
          },{
            'icon':'appstore',
            'name':2
          },{
            'icon':'setting',
            'name':3
          },{
            'icon':'setting',
            'name':4
          },{
            'icon':'setting',
            'name':5
          },]
        }
      }
    }
    render() {
       console.log(JSON.parse(cookies.get('user')))
       var a = JSON.parse(cookies.get('user'))
      return (
        <div className="indexBox">
          <Layout>
            <Sider className="list">
              <img src={logo} className="App-logo" alt="logo" />
              <br/>
              <span>{a.phone?a.phone:a.userName}</span><br/>
              
              
              <Link to='/'>回到首页</Link>
              <Subnews />
            </Sider>
            <Layout>
              <Header className="headerBox">
                <ReactMenv headerNav={this.state.headerList} />
              
              </Header>
              <Content>
                <Subnews />
                
              </Content>
              <Footer className="footer">Footer</Footer>
            </Layout>
          </Layout>
        </div>
      )
    }
  }
