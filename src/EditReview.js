import React, { Component } from 'react'
import { ReviewNavBar, DiaryUpdateForm } from "./ui-components";
import {useParams } from "react-router-dom";
import "./App.css";

function EditReview(){
    return <Put />;
}

  function Put() {
    const { cid } = useParams();
    console.log("found " +(cid));
    return (
      <div><header className="App-header">
        <ReviewNavBar/>
        <DiaryUpdateForm idProp= {cid}/>
        </header></div>
      );
    }

export default EditReview