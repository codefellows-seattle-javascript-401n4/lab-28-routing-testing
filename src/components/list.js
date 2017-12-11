import React from 'react';
import NoteForm from './note-form';

const renderIf = (test, component) => {
    return test ? component : undefined
}

class NoteList extends React.Component{
    constructor(props){
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(e){
        e.preventDefault();
        let id = e.target.dataset['key'];
        let notes = this.props.app.state.noteArray.filter((note,i) => {
            return note.id !== id;
        });
        this.props.handler(notes); 
    }
    render() {
        return (
            <div className="notes-list">{ 
                    renderIf(
                        this.props.app.state.noteArray.length, 
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan='2'>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.app.state.noteArray.map((note,i) =>
                                        <tr key={i}>
                                            <td><a onClick={this.deleteNote} data-key={note.id} href="#">x</a></td>
                                            <td>{note.content}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )        
    }
}
export default NoteList;