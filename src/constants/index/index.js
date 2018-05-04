  import React from 'react'
  import logo from '../../logo.svg';
  import { Link } from 'react-router-dom'
  
  import {  Route, Switch } from 'react-router-dom'
  
  
  //个组件
  import ComponentMessage from '../../components/ComponentMessage' //消息
  import ComponentFunction from '../../components/ComponentFunction' //功能
  import ComponentWisdom from '../../components/ComponentWisdom' //智慧
  import ComponentPersonal from '../../components/ComponentPersonal' //个人
  import ComponentSet from '../../components/ComponentSet' //设置
  
  
  
  
  //底部组件
  import ComponentFooter from '../../components/ComponentFooter'
  
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
            'name':'消息查询',
            'id':1,
            'tos':'message'
          },{
            'icon':'appstore',
            'name':'功能详情',
            'id':2,
            'tos':'func'
          },{
            'icon':'key',
            'name':'智慧钥匙',
            'id':3,
            'tos':'wisdom'
          },{
            'icon':'setting',
            'name':'个人中心',
            'id':4,
            'tos':'per'
          },{
            'icon':'customer-service',
            'name':'客服中心',
            'id':5,
            'tos':'set'
          }]
        }
      }
    }
    componentDidMount(){
      this.props.history.push('/index/message')
    }
    render() {
//     console.log(JSON.parse(cookies.get('user')))
       var a = JSON.parse(cookies.get('user'))
      return (
        <div className="indexBox">
          <Layout>
            <Sider className="list">
              <img src={logo} className="App-logo" alt="logo" />
              <br/>
              <span className="listName">{a.phone?a.phone:a.userName}</span><br/>
             
              <Link className="indexBoxBack" to='/'>回到首页</Link>
            </Sider>
            
            <Layout>
              <Header className="headerBox">
                <ReactMenv headerNav={this.state.headerList} />
              </Header>
              
              <Content id="rootChild">
                <Switch>
                    <Route path="/index/message" component={ComponentMessage} />
                    <Route path="/index/func" component={ComponentFunction} />
                    <Route path="/index/wisdom" component={ComponentWisdom} />
                    <Route path="/index/per" component={ComponentPersonal} />
                    <Route path="/index/set" component={ComponentSet} />
                </Switch>
              </Content>
              
              <Footer className="footer">
                  <ComponentFooter />
              </Footer>
            </Layout>
          </Layout>
        </div>
      )
    }
  }
