  import React from 'react';
  import './subnews.css'
  
  class ComponentFooter extends React.Component{
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
              <div className="footerClass">
                  This is the bottom of my react project @1988.05.28 qixin
              </div>
          );
      }
  }
  export default ComponentFooter;