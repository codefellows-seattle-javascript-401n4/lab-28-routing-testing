import React from 'react';

import NoteForm from '../note-form';
import { renderIf } from '../../lib/__';

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewNote = this.handleNewNote.bind(this);
    this.deleteNoteItem = this.deleteNoteItem.bind(this);
  }

  componentDidMount() {
    console.log('__E_STATE__', this.state);
  }

  deleteNoteItem(e) {
    e.preventDefault();

    const id = e.target.dataset.key;

    this.props.app.setState(currentState =>
      ({
        notes: currentState.notes.filter((note, i) => note.id !== id),
      }
      ));
  }

  handleNewNote(note) {
    this.props.app.setState(currentState => ({ notes: [...currentState.notes, note] }));
  }

  render() {
    // const totalNotes = this.props.app.state.notes
    //   .reduce((t, note) => t += parseInt(note.amount), 0);

    return (
      <div id="noteWrapper">

        <div>
          <h2>My Notes</h2>
          <h3>Total Notes: {}</h3>
        </div>

        <div>
          <h2>notes</h2>

          <NoteForm handler={this.handleNewNote} />

          {
                        renderIf(
                            this.props.app.state.notes.length,

                          <table>

                            <thead>
                              <tr>
                                <th colSpan="2">Note</th>
                                <th>Amount</th>
                              </tr>
                            </thead>

                            <tbody>

                              {
                                        this.props.app.state.notes.map((note, i) =>
                                          (<tr key={note.id}>
                                            <td><a onClick={this.deleteNoteItem} data-key={note.id} href="#">x</a></td>
                                            <td>{note.noteTitle}</td>
                                            <td>{note.noteBody}</td>
                                           </tr>))
                                    }

                            </tbody>

                          </table>,

                        )
                    }

        </div>
      </div>
    );
  }
}

export default Notes;
