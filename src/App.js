
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {ReviewNavBar, ReviewCardCollection,DiaryCreateForm,ReviewHomePage, MyCardCollection, ProfilePage} from "./ui-components";
import { Routes, Route } from 'react-router-dom';
import NewReview from './NewReview'
import EditReview from './EditReview';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
      <Route exact path='/' element={<div><ReviewHomePage/></div>}/>
        <Route exact path='/all' element={<div><ReviewNavBar/><ReviewCardCollection/></div>}/>
        <Route exact path='/new' element= {<div><NewReview/></div>} />
        <Route exact path='/edit/:cid' element= {<div><EditReview/></div>} />
        <Route exact path='/mine' element={<div><ReviewNavBar/><MyCardCollection/></div>}/>
        <Route exact path='/create' element={<DiaryCreateForm/>} />
        <Route exact path='/profile' element={<ProfilePage/>} />
        <Route exact path='/editprof/:cid' element={<EditProfile/>} />
        {/* <Route exact path='/history' element={</>} />
        <Route exact path='/stats' element={</>} /> */}
      </Routes>
    </header></div>
    );
}
}

export default withAuthenticator(App);
