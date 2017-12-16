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
      date: new Date().toLocaleString(),
    };
  }

  onChange(event){
    this.setState({content: event.target.value, editing: true, completed:false});
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({content: '', editing: false, completed: true, id:uuid()});
    this.props.addNote({...this.state});
  }

  render(){
    console.log(this.props.list, this.state, "___STATE__");
    return(
      <div className="inputForm">
        <form onSubmit={this.onSubmit}>
          <label> <h4>Enter Your Note </h4>
            <input className="noteForm" type="text" value={this.state.content} onChange={this.onChange}/>
            <button type="submit">Submit!</button>
          </label>
        </form>

      </div>
    );
  }
}

export default NoteCreateForm;
