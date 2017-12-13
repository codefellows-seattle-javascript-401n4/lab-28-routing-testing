'use strict';
import './_home-page.scss';

import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
  }

  componentDidUpdate(){
    console.log('__APP_STATE_FROM_HOME__', this.props.app.state);
  }

  createNote(note){

  }

  render(){
    return (
      <div className="home-page">
        <h2>Home Page!</h2>
        <NoteCreateForm />
        {/*<NoteList />*/}
      </div>
    )
  }
}
export default HomePage;
