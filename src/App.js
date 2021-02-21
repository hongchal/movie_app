import React from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading : true
  };

  componentDidMount(){
    setTimeout(
      () => {
        this.setState({isLoading: false});
        // this.setState(loading => {loading.isLoading = false})
      }, 1000
    );
  }

  render(){
    const {isLoading} = this.state;
    console.log("Rendering");
    // console.log(isLoading);
    // console.log(typeof(this.state));
    return (
    <div>
      {isLoading ? "Loading..." : "we are ready"}
    </div>
    );
  }

}

export default App; 
