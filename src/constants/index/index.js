  import React from 'react'
  import logo from '../../logo.svg';
  import { Link } from 'react-router-dom'
  import Subnews from '../../components/subnews'
  import {Layout} from 'antd';
  import './index.css'
  const { Header, Footer, Sider, Content } = Layout;

  export  default class Index extends React.Component {
    render() {
      return (
        <div className="indexBox">
          <Layout>
            <Sider className="list">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to='/'>回到首页</Link>
              <Subnews />
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer className="footer">Footer</Footer>
            </Layout>
          </Layout>
        </div>
      )
    }
  }
