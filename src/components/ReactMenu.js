  import React from 'react'
  import { Menu, Icon } from 'antd';
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  class ReactMenu extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        current: 'mail',
        listIcon:[],
        listName:[]
      }
      console.log(this.props.headerNav)
    }
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
    componentDidMount(){
      const ListIcon = this.props.headerNav.line
      console.log(ListIcon)
      
      var _this = this
      var arr = [];
      var arr2 = []
      ListIcon.forEach(function(value, index, array) { 
        console.log(value.icon)
        arr.push(value.icon)
        arr2.push(value.name)
         
      });
      console.log(arr)
      _this.setState({
          listIcon:arr,
          listName:arr2
      })
    }
    render(){
      console.log(this.state.listName)
      const ListI = this.state.listIcon
      const ListN = this.state.listName
      const lists = ListN.map((ListN) => <Menu.Item key={ListN}>{ListN}</Menu.Item> )
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
        {lists}
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
             {lists}

            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      )
    }
  }
  export default ReactMenu
  
//<Menu.Item key="mail">
//          <Icon type="mail" />Navigation One
//        </Menu.Item>
//        <Menu.Item key="app">
//          <Icon type="appstore" />Navigation Two
//        </Menu.Item>
//        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
//          <MenuItemGroup title="Item 1">
//           
//
//          </MenuItemGroup>
//          <MenuItemGroup title="Item 2">
//            <Menu.Item key="setting:3">Option 3</Menu.Item>
//            <Menu.Item key="setting:4">Option 4</Menu.Item>
//          </MenuItemGroup>
//        </SubMenu>
//        <Menu.Item key="alipay">
//          <span>Navigation Four - Link</span>
//        </Menu.Item>