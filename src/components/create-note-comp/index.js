'use strict';

import React from 'react';

class CreateNoteComp extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      content: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handeleSubmit(this.state);
  }

  handleChange(e) {
    let content = e.target.value;
    this.setState({content});
  }

  render() {
    return(
      <form onSubmit={this.handeleSubmit}>
       
       <input 
        type='text' 
        name='content'
        value={this.state.content}
        onChange={this.handleChange}
        />
        
        <button type='submit'> + </ button>
      </form>
    )
  }
}

export default CreateNoteComp