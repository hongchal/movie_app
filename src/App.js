import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("im constructor");
  };

  state = {
    count : 0
  };
  add = () => {
    // console.log("add");
    this.setState(current => ({count : current.count +1 }));
  }
  minus = () => {
    this.setState(current => ({count : current.count -1 }));
  }

  componentDidMount(){
    console.log("i'm mounted");
  }

  componentDidUpdate(){
    console.log("i'm updated");
  }

  componentWillUnmount(){
    console.log("bye");
  }
  
  render(){
    console.log("i'm rendering");
    return (
    <div>
      <h1>the number is : {this.state.count}</h1>
      <button onClick = {this.add}>Add</button>
      <button onClick = {this.minus}>Minus</button>

    </div>
    );
  }

}

export default App; 
