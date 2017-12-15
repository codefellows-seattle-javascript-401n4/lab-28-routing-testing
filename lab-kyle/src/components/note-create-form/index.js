'use strict';

import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.handleCreateNote(this.state)
  }
  render() {
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>

        <input type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange} />

        <button type="submit">Submit Note</button>
      </form>
    )
  }
}
export default NoteCreateForm;
