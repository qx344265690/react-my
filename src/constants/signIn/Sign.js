
  import React from 'react';
  import './Sign.css'
  import { Link } from 'react-router-dom'
  import {Form, Icon, Input, Button, Checkbox, message, Spin} from 'antd'
  
  var cookies = require('browser-cookies');
  const FormItem = Form.Item;

  class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true,
            list:'as',
            showSpin:false
        };
    };
    //es6箭头函数自动绑定this，要不为undefined
    handleClick = () =>{
      this.setState(a => ({
        showSpin:true
      }))
    }
    
    handleClicks = () =>{
      this.setState(a => ({
        showSpin:false
      }))
    }
    
    handleSubmit = (e) => {//提交 
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
        //表单进行提交 https://blog.csdn.net/sinat_17775997/article/details/70054674
        var form = document.querySelector('form')
        var _this = this
        fetch('https://www.easy-mock.com/mock/5ad97988cd7dd656524663f6/qx/sign', {
          method: 'POST',
          body: new FormData(form)
        })
        .then(function(res){
          res.json().then(function(data){
             _this.handleClick()
            if(data.success !== '200'){
              message.success('登录成功，快进去玩耍吧');//成功提示
              cookies.set('user', JSON.stringify(values)); //设置cookie
              _this.props.history.push('/index/1')//跳转 接受2个参数pat  h和state
            }else{
               message.error('是不是服务器炸了等等吧');
               _this.handleClicks()
            }
          }) 
        })
        }
      });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Spin spinning={this.state.showSpin}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <Link to='/pass' className="login-form-forgot">Forgot password</Link>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
          </Spin>
        </Form>
      );
    }
  }
  const Sign = Form.create()(NormalLoginForm);
  export default Sign

       
//console.log(JSON.parse(cookies.get('user'))) //获取用户信息
       //请求数据
//    fetch("https://www.easy-mock.com/mock/5ad97988cd7dd656524663f6/qx/sign")
//    .then(
//      function(response){
//        if(response.status!==200){
//            console.log("存在一个问题，状态码为："+response.status);
//            return;
//        }
//        //检查响应文本
//        response.json().then(function(data){
//            console.log(data);
//        });
//      }
//    )
//    .catch(function(err){
//        console.log("Fetch错误:"+err);
//    });
