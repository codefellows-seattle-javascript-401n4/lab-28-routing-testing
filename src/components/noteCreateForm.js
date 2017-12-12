'use strict';

import uuid from 'uuid/v1';
import React from 'react';
import NoteList from './noteList.js';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: uuid(),
      editing: false,
      completed: false,
      content: '',
      noteCollection: [],
    };
  }

  onChange(event){
    this.setState({editing: true, completed:false, content: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({editing: false, completed:true});
  }

  render(){
    console.log(this.state.content);
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label> Enter Your Note.
            <input type="text" value={this.state.content} onChange={this.onChange} />
            <button type="submit">Submit!</button>
          </label>
        </form>
        <NoteList note={this.state.noteCollection}/>
      </div>
    );
  }
}

export default NoteCreateForm;
