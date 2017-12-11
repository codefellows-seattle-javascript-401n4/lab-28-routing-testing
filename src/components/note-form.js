import uuid from 'uuid/v4';
import React from 'react';

class NoteForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            editing:false,
            completed:false,
            content:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleNewNote(e) {
        e.preventDefault();
        console.log('CURRENT note:::::::', this.state)
        // this.props.app.setState(currentState => ({noteArray: [...currentState.noteArray, this.state]}));
        // console.log('props:::::',this.state);  
        this.props.handler(this.state);
    }


    render() {
        return (
            <form onSubmit={this.handleNewNote}>
                {/* <input placeholder="Note Title" type="text" name="name" onChange={this.handleChange} /> */}
                <input placeholder="Note Body" type="textarea" name="content" onChange={this.handleChange} />
                <button type="submit">Add Note</button>
            </form>
        )
    }


}

export default NoteForm;