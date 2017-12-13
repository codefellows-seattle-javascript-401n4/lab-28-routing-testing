'use strict';
import '_home-page.scss';

import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
  }

  createNote(note){

  }

  render(){
    return (
      <div className="home-page">
        <NoteCreateForm />
        {/*<NoteList />*/}
      </div>
    )
  }
}
export default HomePage;
