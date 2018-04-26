  import React from 'react';
  import './subnews.css'
  class ComponentMessage extends React.Component{
      constructor(props){
          super(props);
          this.clickhandler=this.clickhandler.bind(this);
      }
      clickhandler(){
          console.log(this.props.history);
//        this.props.history.push('/app');
      }
      render() {
          return (
              <div>
                  ComponentMessage<br/>
                  这是消息查询页面
              </div>
          );
      }
  }
  export default ComponentMessage;