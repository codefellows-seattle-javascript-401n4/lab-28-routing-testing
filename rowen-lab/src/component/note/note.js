import React from 'react';

import NoteForm from '../note-form/note-form.js'
import Modal from '../modal/modal.js'
// import {renderIf} from '../../lib/__.js'

class Note extends React.Component {

    constructor(props) {
        super(props);

        this.state = {note:0};

        this.handleNewNotebook = this.handleNewNotebook.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
        // this.closeModal = this.closeModal.bind(this);
        // this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidMount() {
        console.log("__E_STATE__", this.state);
    }

    // deleteNote(e) {
    //     e.preventDefault();
    //
    //     let id = e.target.dataset['key'];
    //
    //     this.props.app.setState(
    //         currentState =>
    //             ( {notes: currentState.notes.filter( (note,i) => {
    //                 return note.id !== id;
    //             })}
    //         )
    //     )
    //
    // }

    closeModal() {
        let showErrors = false;
        this.props.app.setState({showErrors})
    }


    handleNewNotebook(e) {
        e.preventDefault();
        let note = e.target.querySelector('input[name=note]').body;
        this.props.app.setState({note});
        // this.props.handler(note);
    }

    handleNewNote(note) {
        this.props.app.setState( currentState => ({notes: [...currentState.notes, note]}) );
    }

    render() {

        return (
           <div id="noteWrapper">

                <div>
                    <h2>Note Summary</h2>
                    // <h3>note: {this.props.app.state.note}</h3>

                    <form onSubmit={this.handleNewNotebook}>
                        <input name='note' type="number" placeholder="Enter note Amount" />
                        <button>Set note</button>
                    </form>
                </div>

                <div>
                    <h2>notes</h2>
                </div>
            </div>
                    // {
                    //     renderIf(
                    //         remainingnote,
                    //         <NoteForm handler={this.handleNewNote}/>
                    //     )
                    // }
                    //
                    // {
                    //     renderIf(
                    //         this.props.app.state.notes.length,
                    //
                    //         <table>
                    //
                    //             <thead>
                    //                 <tr>
                    //                     <th colSpan='2'>Note</th>
                    //                     <th>Body</th>
                    //                 </tr>
                    //             </thead>
                    //
                    //             <tbody>
                    //
                    //                 {
                    //                     this.props.app.state.notes.map( (note, i) =>
                    //                         <tr key={note.id}>
                    //                             <td><a onClick={this.deleteNote} data-key={note.id} href="#">x</a></td>
                    //                             <td>{note.name}</td>
                    //                             <td>{note.body}</td>
                    //                         </tr>
                    //                     )
                    //                 }
                    //
                    //             </tbody>
                    //
                    //         </table>
                    //
                    //     )
                    // }

        )

    }

}

export default Note;
