import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    // return <div />;
    // return <div><input onChange={()=>{}} type="text"/></div>;
    return (
        <div>
          <input
            onChange={(event) => {
              this.setState({ input: event.target.value })}}
            type="text"/>
        </div>
    );
  }
}