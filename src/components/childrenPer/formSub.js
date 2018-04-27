 import React from 'react'
 import './childrenPer.css'
 class Fromsub extends React.Component{
   constructor(props){
     super(props)
     this.state={
       name:'赵日天',
       sex:'女',
       level:'顶级',
       money:'一个亿',
       life:'天荒地老'
     }
   }
      render() {
          return (
            <div>
              <div className="formSub_box">
                <p>名号:<span>{this.state.name}</span></p>
                <p>性别:<span>{this.state.sex}</span></p>
                <p>矫情级别:<span>{this.state.level}</span></p>
                <p>生存成本:<span>{this.state.money}</span></p>
                <p>寿命:<span>{this.state.life}</span></p>
              </div>
            </div>
          );
      }
  }
  export default Fromsub;