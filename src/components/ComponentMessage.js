  import React from 'react';
  import './subnews.css'
  import { Tabs, Card, Col, Row  } from 'antd';
  const TabPane = Tabs.TabPane;
  const { Meta } = Card;
  class ComponentMessage extends React.Component{
      constructor(props){
          super(props);
          this.state ={
            tabPosition: 'bottom',
            line:[{
              'id':1,
              'name':'一夜',
              'img':'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            },{
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
      changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
      }
      clickhandlers = (a)=>{
        console.log(a)
      }
      render() {
//      const Lists = this.state.line.map((a)=><TabPane tab={a.name} key={a.id}>{a.name}</TabPane>)
        const showList =this.state.line.map((a)=>
                              <Col span={4} key={a.id} className="MessageCol">
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
          return (
              <div>
                  <Tabs tabPosition={this.state.tabPosition} onChange={this.clickhandlers}>
                      <TabPane tab="男频专区" key="1">
                        <Row gutter={16}>
                          {showList}
                        </Row>
                      </TabPane>
                      <TabPane tab="女频专区" key="2">
                        {showList}
                      </TabPane>
                      <TabPane tab="修仙专区" key="3">
                      {showList}
                      </TabPane>
                      <TabPane tab="捉鬼专区" key="4">
                      {showList}
                      </TabPane>
                      <TabPane tab="盗墓专区" key="5">
                      {showList}
                      </TabPane>
                  </Tabs>
              </div>
          );
      }
  }
  export default ComponentMessage;
  
//<Card title="This is Message">
//                  <Card.Grid style={gridStyle}>系统消息</Card.Grid>
//                  <Card.Grid style={gridStyle}>女频消息</Card.Grid>
//                  <Card.Grid style={gridStyle}>男频消息</Card.Grid>
//                  <Card.Grid style={gridStyle}>Content</Card.Grid>
//                </Card>
//                <Tabs tabPosition={this.state.tabPosition} onChange={this.onChange}>
//                  <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
//                  <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
//                  <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
//                </Tabs>