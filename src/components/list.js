import React from 'react';
// import NoteForm from './note-form';
// import EditNote from './edit';

const renderIf = (test, component, alternative) => {
    return test ? component : alternative
}

class NoteList extends React.Component{
    constructor(props){
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    deleteNote(e){
        e.preventDefault();
        let id = e.target.dataset['key'];
        let notes = this.props.app.state.noteArray.filter((note,i) => {
            return note.id !== id;
        });
        this.props.handler(notes); 
    }
    // handleUpdate(props){
    //     his.props.app.setState(???????)
    // }
   
    render() {
        return (
            <div className="notesList">{ 
                    renderIf(
                        this.props.app.state.noteArray.length, 
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan='2'>Notes:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.app.state.noteArray.map((note,i) =>
                                        <tr key={i}>
                                            <td><a onClick={this.deleteNote} data-key={note.id} href="#">x</a></td>
                                            <td>{note.content}</td>
                                            {/* <td EditNote handler={this.handleUpdate} app={this.props.app}/> */}
                                        </tr>
                                    )
                                }
                
                            </tbody>
                        </table>,
                        <h3> No Notes. Create one.</h3>
                    )
                }
            </div>
        )        
    }
}
export default NoteList;