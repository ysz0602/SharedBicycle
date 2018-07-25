import React from 'react';
import { Card, Button, notification  } from 'antd';

export default class Notification extends React.Component{
  openNotification = (type) => {
    notification[type]({
      message: '发工资了',
      description: '上个月考勤22天，迟到12天，实发工资250.'
    })
  }
  render(){
    return(
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}
