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
                <p><span className="formSub_name formSub_n_spa">名号:</span><span className="formSub_n_spa">{this.state.name}</span></p>
                <p><span className="formSub_name formSub_n_spa">性别:</span><span className="formSub_n_spa">{this.state.sex}</span></p>
                <p><span className="formSub_name formSub_n_spa">矫情级别:</span><span className="formSub_n_spa">{this.state.level}</span></p>
                <p><span className="formSub_name formSub_n_spa">生存成本:</span><span className="formSub_n_spa">{this.state.money}</span></p>
                <p><span className="formSub_name formSub_n_spa">寿命:</span><span className="formSub_n_spa">{this.state.life}</span></p>
              </div>
            </div>
          );
      }
  }
  export default Fromsub;