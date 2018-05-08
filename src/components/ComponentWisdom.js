  import React from 'react';
  import './subnews.css'
  import { connect } from 'react-redux'
  import {Link} from 'react-router-dom'
  import {Button} from 'antd'
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  
  class ComponentWisdom extends React.Component {
    constructor(props){
      super(props)
      console.log(props)
    }
    render() {
      return (
        <div>
        <Button type="primary" onClick={this.props.changeName}>改变redux中的名字</Button>
        <Dialog
          title={this.props.card.name}
          message="Thank you for visiting our spacecraft!"/>
        <Link to="/app/6" className="lickName">
          <Button type="primary">List跳转</Button>
         </Link>
        </div>
      );
    }
  }
  function mapStateToProps(state){
    console.log(state)
    return state
  }
  function mapDidStateToProps(dispatch){
    return {
      changeName(){
        dispatch({
          type:'CHANGE_NAME',
          name:'哈哈哈，我的vuex改变了'
        })
      }
    }
  }
  
  export default connect(mapStateToProps,mapDidStateToProps)(ComponentWisdom);
  





//ComponentWisdom