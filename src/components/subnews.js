  import React from 'react';
  import {Link} from 'react-router-dom'
  import {Button} from 'antd'
  import './subnews.css'
  class Subnews extends React.Component{
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
                  这是Subnews<br/>
                  <Link to="/app/6" className="lickName">
                   <Button type="primary">子组件跳转</Button>
                   </Link>
              </div>
          );
      }
  }
  export default Subnews;