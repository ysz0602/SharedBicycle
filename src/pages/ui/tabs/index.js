import React from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import './../ui.less';
const TabPane = Tabs.TabPane;

export default class Messages extends React.Component{
  newTabIndex = 0;
  handleCallback = (key) => {
    message.info("Hi，您选择了页签:"+key)
  }

  componentWillMount(){
    const panes = [
      { title:'Tab 1', content: 'Content 1', key: '1' },
      { title:'Tab 2', content: 'Content 2', key: '2' },
      { title:'Tab 3', content: 'Content 3', key: '3' },
    ];
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    console.log(activeKey);
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render(){
    return(
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">Content1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>Content2</TabPane>
            <TabPane tab="Tab 3" key="3">Content3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Content1</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">Content2</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">Content3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab页签动态切换" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map(pane => {
                return(<TabPane tab={pane.title} key={pane.key}>
                    { pane.content }
                  </TabPane>);
              })
            }
          </Tabs>
        </Card>
      </div>
    );
  }
}
