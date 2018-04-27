  import React from 'react';
  import './subnews.css'
  class ComponentSet extends React.Component{
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
              <div className="set_Name">
                  客服不在家,逛街去了<br/>
                  老板看客服不在,泡妞去了<br/>
                  都不在,看书免费,别问了
                   
              </div>
          );
      }
  }
  export default ComponentSet;