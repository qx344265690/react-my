  import React from 'react'
  import { Menu, Icon } from 'antd';
  import { Link } from 'react-router-dom'
//const SubMenu = Menu.SubMenu;
  class ReactMenu extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        current: '1',
      }
    }
    handleClick = (e) => {
      this.setState({
        current: e.key,
      });
//    this.props.history.push('/index/e.key')
    }
    componentDidMount(){
//    console.log(this.props)
//    console.log(this.props.match.params.id)
//    const ListIcon = this.props.headerNav.line
//    var _this = this
//    var arr = [];
//    var arr2 = []
//    ListIcon.forEach(function(value, index, array) { 
////      console.log(value.icon)
//      arr.push(value.icon)
//      arr2.push(value.name)
//    });
//    _this.setState({
//        listIcon:arr,
//        listName:arr2
//    })
//    const List = a.map((a) => <Menu.Item key={a.id}><Icon type={a.icon} />{a.name}</Menu.Item>)
    }
    render(){
      const a = this.props.headerNav.line//接受数组对象包含图片icon和名称name 需要接受不同的key来标记
      const List = a.map((a) => <Menu.Item key={a.id}><Link to={/index/+a.tos}><Icon type={a.icon} />{a.name}</Link></Menu.Item>)
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {List}
        </Menu>
      )
    }
  }
  export default ReactMenu


// const List = a.map((a) =>
//      <SubMenu  key={a.id} title={<span><Icon type={a.icon} />{a.name}</span>}>
//          <Menu.Item key={a.id}><Link to={/index/+a.id}><Icon type={a.icon} />{a.name}</Link></Menu.Item>
//      </SubMenu>)