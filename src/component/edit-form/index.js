import React from 'react';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      noteID: null,
      content: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  
  componentWillMount(){
    this.setState({noteID:this.props.noteID});
  }
  
  handleChange(e){
    this.setState({content:e.target.value});
  }
  
  handleSubmit(e){
    e.preventDefault();
    let newNote = {
      id: this.state.noteID,
      content: this.state.content,
    };
    this.props.edit(newNote);
    this.setState({content:''});
  }
  
  render(){
    return(
      <form className='edit-form' onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder='Enter Updated Note Here'
          type='text'
          value={this.state.content}
        />
        <button type='submit'> Edit Note </button>
      </form>
    );
  }
    
}

export default EditForm;