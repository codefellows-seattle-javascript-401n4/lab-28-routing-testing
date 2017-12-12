import React from 'react';
// import NoteForm from './note-form';

class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
        
        }
        this.editNote = this.editNote.bind(this);    
    }
editNote(e){
    // e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
}

handleSubmint(e){
    e.preventDefault();
    this.props.updateNote(this.state);
}
render(){
    return (
            <form>
                <input name ='content' onChange={this.editNote} placeholder={this.props.content}></input>
                <button type="submit" onSubmit = {this.handleSubmit}>Submit Note</button>
            </form>
    )
}
}
export default EditNote;