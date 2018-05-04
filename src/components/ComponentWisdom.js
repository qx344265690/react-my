  import React from 'react';
  import './subnews.css'

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
    render() {
      return (
        <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
      );
    }
  }
  export default ComponentWisdom;
  





//ComponentWisdom