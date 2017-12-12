import React from 'react';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  };
  
  componentWillMount(){
    this.setState({
      id: this.props.note.id,
      editing: this.props.note.editing,
      copmleted: this.props.note.completed,
      content: this.props.note.content,
    })
  }

  handleChange(e){
    this.setState({content:e.target.value});
  }
  
  handleSubmit(e){
    e.preventDefault();
    let newNote = {
      id: this.state.id,
      content: this.state.content,
    };
    this.props.edit(newNote);
    this.setState({content:''});
  }
  
  handleForm(){
    let form = null;
    // let show = this.state.editing;
    let show = true;
    if(show){
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
      )
    }
  }
  
  render(){
    return(
      <div className='edit-form'>
        {this.handleForm()}
      </div>
    );
  }
    
}

export default EditForm;