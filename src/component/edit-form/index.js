import React from 'react';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      content: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  };
  
  componentWillMount(){
    this.setState({
      editing:this.props.note.editing,
      noteID:this.props.note.noteID,
      showForm:this.props.note.showForm,
    });
  }
  
  componentDidMount(){
    console.log('__MOUNTED', this.state);
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
  
  handleForm(){
    let form = null;
    let show = this.state.showForm;
    console.log('__RENDER__', this.state);
    if(!show){
      <form className='edit-form' onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder='Enter Updated Note Here'
          type='text'
          value={this.state.content}
        />
        <button type='submit'> Edit Note </button>
      </form>
    }
  }
  
  render(){
    this.handleForm();
    return(
      // <form className='edit-form' onSubmit={this.handleSubmit}>
      //   <input
      //     onChange={this.handleChange}
      //     placeholder='Enter Updated Note Here'
      //     type='text'
      //     value={this.state.content}
      //   />
      //   <button type='submit'> Edit Note </button>
      // </form>
      <h1>TEST</h1>
    );
  }
    
}

export default EditForm;