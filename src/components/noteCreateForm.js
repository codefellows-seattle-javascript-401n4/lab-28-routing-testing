'use strict';

import uuid from 'uuid/v1';
import React from 'react';
import Note from './noteItem.js';
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
    };
  }

  onChange(event){
    this.setState({content: event.target.value, editing: true, completed:false});
  }

  onSubmit(event){
    event.preventDefault();
    let noteyNotey = this.state;
    this.props.addNote(noteyNotey);
    this.setState({content: this.state.content, editing: false, completed: true, id:uuid()});
  }

  render(){
    console.log(this.props.list);
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label> Enter Your Note:
            <input type="text" value={this.state.content} onChange={this.onChange} />
            <button type="submit">Submit!</button>
          </label>
        </form>

      </div>
    );
  }
}

export default NoteCreateForm;
