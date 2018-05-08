  import React from 'react'
  import { connect } from 'react-redux'
  

  class MessageGirl extends React.Component{
    constructor(props){
      super(props)
      console.log(props)
    }
      render(){
        return(
          <div>女频专区,终端组件{this.props.card.name}</div>
        )
      }
  }

  function mapStateToProps(state){
    return state
  }
  export default connect(mapStateToProps)(MessageGirl);