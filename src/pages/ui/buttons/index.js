import React from 'react';
import { Card, Button } from 'antd';
import './index.less';

export default class Buttons extends React.Component{

  render(){
    return(
      <div>
        <Card title="基础按钮">
          <Button type="primary">yangsz</Button>
          <Button>yansz</Button>
          <Button type="dashed">yangsz</Button>
          <Button type="danger">yangsz</Button>
          <Button disabled>yangsz</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={true}>确定</Button>
          <Button type="primary" shape="circle" loading={true}></Button>
          <Button loading={true}>点击加载</Button>
          <Button shape="circle" loading={true}></Button>
          <Button type="primary">关闭</Button>
        </Card>
      </div>
    );
  }
}
