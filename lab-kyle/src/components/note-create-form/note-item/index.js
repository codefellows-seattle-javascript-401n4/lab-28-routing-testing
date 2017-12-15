'use strict';

import React from 'react';

class Delete extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e){
    e.preventDefault();
    this.props.handleDeleteNote(this.state)
  }
  render(){
    return (
      <div>
        <button type="submit">Delete Note</button>
      </div>
    )
  }
}
export default Delete
