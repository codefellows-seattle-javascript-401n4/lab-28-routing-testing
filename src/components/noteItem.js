'use strict';

import React from 'react';
import NoteList from './noteList.js';
import NoteForm from './noteCreateForm.js';
class Note extends React.Component {
  constructor(props){
    super(props);


  }



  render(){
    return (
      <div>
        <button type="submit" onClick={this.props.delete}> Delete! </button>
      </div>
    );
  }
}

export default Note;
