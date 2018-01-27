import uuid from 'uuid/v4';
import React from 'react';

class NoteForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: uuid(),
            name: '',
            body: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.body})
    }

//is it really this easy?
//Hey! Handle the state! Ok! Thanks! :3
    handleNewNote(event) {
        event.preventDefault();
        this.props.handler(this.state);
    }


    render() {

        return (
            <form onSubmit={this.handleNewNote}>
                <input placeholder="New Note" type="text" name="name" onChange={this.handleChange} />
                <input placeholder="Note Text" type="text" name="body" onChange={this.handleChange} />
                <button type="submit">Add Note</button>
            </form>
        )
    }


}

export default NoteForm;
