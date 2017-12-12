'use strict';

import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state{
      id: uuid.v1();

    }
  }

  createNote(){
    
  }

  render(){
    return (
      <div className="note-creator">

      </div>
    )
  }
}
export default NoteCreateForm;
