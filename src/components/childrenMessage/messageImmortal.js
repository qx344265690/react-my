  import React from 'react'
  import { connect } from 'react-redux'
  

  class MessageImmortal extends React.Component{
    constructor(props){
      super(props)
      console.log(props)
    }
      render(){
        return(
          <div>仙频专区,终端组件{this.props.card.name}</div>
        )
      }
  }

  function mapStateToProps(state){
    return state
  }
  export default connect(mapStateToProps)(MessageImmortal);