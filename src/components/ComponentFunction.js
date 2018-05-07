  import React from 'react';
  import {Link} from 'react-router-dom'
  import {Button} from 'antd'
  import './subnews.css'
  
  class ComponentFunction extends React.Component{
      constructor(props){
          super(props);
          this.clickhandler=this.clickhandler.bind(this);
          console.log(this.props)
      }
      clickhandler(){
          console.log(this.props.history);
          
//        this.props.history.push('/app');
      }
      
      render() {
          return (
              <div>
                  ComponentFunction<br/>
                  <Link to="/app/6" className="lickName">
                   <Button type="primary">List跳转</Button>
                   </Link>
                   
              </div>
          );
      }
  }
  export default ComponentFunction;