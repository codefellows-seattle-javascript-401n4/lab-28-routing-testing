import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
        content: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({content: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({content:''});
  }


  render(){
    return(
      <form className='note-form' onSubmit = {this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder='Enter Note Here'
          type='text'
          name='content'
          value={this.state.content}
        />
        <button type='submit'> Create Note </button>
      </form>
    )
  }
}

export default NoteForm;