import './App.css';
import React from 'react';
import EnhancedComponent from "./components/HighOrder";
class App extends React.Component{
  render(){
    const {show,handleclick}=this.props
    return <button onClick={handleclick}>{show}</button>
  }
}

export default EnhancedComponent(App);
