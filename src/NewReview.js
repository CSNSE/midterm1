import React, { Component } from 'react'
import { UINewReview, ReviewNavBar } from "./ui-components";
import "./App.css";

class NewReview extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <ReviewNavBar/>
        <UINewReview style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewReview