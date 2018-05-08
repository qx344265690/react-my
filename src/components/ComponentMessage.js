  import React from 'react';
  import './subnews.css'
  import { Tabs, Card, Col, Row, Carousel } from 'antd';
  import { connect } from 'react-redux'
  
  import MessageMan from './childrenMessage/messageMan'
  import MessageGirl from './childrenMessage/messageGirl'
  import MessageImmortal from './childrenMessage/messageImmortal'
  import MessageGhost from './childrenMessage/messageGhost'
  import MessageRobber from './childrenMessage/messageRobber'
  
  const TabPane = Tabs.TabPane;
  const { Meta } = Card;
    

  class ComponentMessage extends React.Component{
      constructor(props){
          super(props);
          this.state ={
            tabPosition: 'left',//控制选项卡导航展示位置
            line:[{
              'id':2,
              'name':'一天',
              'img':'http://img06.tooopen.com/images/20180413/tooopen_sy_238971656951.jpg'
            },{
              'id':3,
              'name':'一时',
              'img':'http://img06.tooopen.com/images/20180426/tooopen_sy_239779277231.jpg'
            },{
              'id':4,
              'name':'一分',
              'img':'http://img06.tooopen.com/images/20180325/tooopen_sy_237231654636.jpg'
            },{
              'id':5,
              'name':'一秒',
              'img':'http://img07.tooopen.com/images/20180226/tooopen_sy_234249017311.jpg'
            }]
          }
      }
      
//    
//    changeTabPosition = (tabPosition) => {
//      this.setState({ tabPosition });
//    }
      clickhandlers = (a)=>{
        console.log(a)
      }
      render() {
//      const Lists = this.state.line.map((a)=><TabPane tab={a.name} key={a.id}>{a.name}</TabPane>)
        const showList =this.state.line.map((a)=>
                <Col span={5} key={a.id} className="MessageCol">
                   <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={a.img} />}
                    >
                      <Meta
                        title={a.name}
                        description="www.instagram.com"
                      />
                    </Card>
                </Col>
              )
        const showCarousel = this.state.line.map((a)=>
              <div className="showCarImg" key={a.name}><img src={a.img}/></div>
        )
//      <Row gutter={16}>
//                      {showList}
//                    </Row>
      return (
          <div>
              <Tabs tabPosition={this.state.tabPosition} onChange={this.clickhandlers}>
                  <TabPane tab="男频专区" key="1">
                      <MessageMan/>
                  </TabPane>
                  
                  <TabPane tab="女频专区" key="2">
                      <MessageGirl/>
                  </TabPane>
                  
                  <TabPane tab="修仙专区" key="3">
                      <Carousel autoplay>
                        {showCarousel}
                      </Carousel>
                      <MessageImmortal/>
                  </TabPane>
                  
                  <TabPane tab="捉鬼专区" key="4">
                    {this.props.message.name}
                    <button onClick={this.props.changeMessage}>点我改变</button>
                    <MessageGhost/>
                  </TabPane>
                  
                  <TabPane tab="盗墓专区" key="5">
                    <MessageRobber/>
                  </TabPane>
              </Tabs>
          </div>
      );
      }
  }
  function mapStateToProps(state){
    return state
  }
  function mapDispatchToProps(dispatch){
    return {
      changeMessage(){
        dispatch({
          type: 'CHANGE_NAME',
        name: '葬爱'
        })
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ComponentMessage);
