  import React from 'react'
  import { connect } from 'react-redux'
  

  class MessageMan extends React.Component{
    constructor(props){
      super(props)
      console.log(props)
      this.state = {
        name:'Man自己的数据'
      }
    }
    render(){
      return(
        <div>
        
          <div>男频专区,终端组件{this.props.card.name}</div>
          <div>{this.state.name}</div>
        
        
        
        
        </div>
        
      )
    }
  }

  function mapStateToProps(state){
    return state
  }
  export default connect(mapStateToProps)(MessageMan);