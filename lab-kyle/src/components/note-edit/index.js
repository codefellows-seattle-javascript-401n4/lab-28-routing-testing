import React from 'react';

class NoteEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      content: '',
      editing: false,
      completed: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleChange(e){
    this.setState({content: e.target.value});
  }
  handleSubmit(){
    e.preventDefault();

    let updateNote = {
      id: this.state.id,
      content: this.state.content,
    }
    this.props.edit(updateNote);
    this.setState({content: ''});
  }
  handleForm(){
    let willEdit = true;
    if (willEdit){
      return (
        <form className="editing-form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Update your Note" type="text" value={this.state.content} />
          <button type="submit">Edit Note</button>
        </form>
      )
    }
  }
  render(){
    return(
      <div className='note-edit'>
      {this.handleForm()}
      </div>
    )
  }
}
export default NoteEdit;
