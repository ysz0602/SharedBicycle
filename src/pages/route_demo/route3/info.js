import React from 'react';
export default class Info extends React.Component{
  render(){
    console.log("=====", this.props)
    return (
      <div>
        Info ==>
        { this.props.match.params.value }
      </div>
    );
  }
}
