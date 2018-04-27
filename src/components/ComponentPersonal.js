  import React from 'react';
  import './subnews.css'
  
  import Avatar from './childrenPer/avatar'
  import Fromsub from './childrenPer/formSub'
  
  class ComponentPersonal extends React.Component{
      constructor(props){
          super(props);
          this.clickhandler=this.clickhandler.bind(this);
      }
      clickhandler(){
          console.log(this.props.history);
//        this.props.history.push('/app');
      }
      handleLoginClick=()=>{
        console.log(123)
      }
      render() {
        const ava = <Avatar/> //头像组件
          return (
            <div>
                <div className="personal_img">
                  {ava}
                  <div className="personal_message"><Fromsub/></div>
                </div>
            </div>
          );
      }
  }
  export default ComponentPersonal;
  
//表单编辑姓名<br/>
//              优惠<br/>  
//              消息入口<br/>
//              推荐图书<br/>