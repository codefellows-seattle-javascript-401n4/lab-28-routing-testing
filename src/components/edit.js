import React from 'react';
import NoteForm from './note-form';

class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            editing: false,
            completed: false,
            content: ''
        }
        this.editNote = this.editNote.bind(this); 
        this.handleSubmint = this.handleSubmint.bind(this);   
    }
editNote(e){
    this.setState({[e.target.name]:e.target.value})
}

handleSubmint(e){
    e.preventDefault();
    this.setState({
        id: this.state.id,
        content: this.state.content,
        editing: this.state.editing,
        content: this.state.content
    })
    ///?
    this.props.updateNote(this.state)
}
render(){
    return (
            <form onSubmit = {this.handleSubmit}>
                <input name ='content' onChange={this.editNote} placeholder="type new note" value={this.props.note.content}></input>
                <button type="submit" >Submit Note</button>
            </form>
    )
}
}
export default EditNote;