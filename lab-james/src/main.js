import React from 'react';
import ReactDom from 'react-dom';

import NoteForm from './components/note-form.js';

class App extends React.Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [],
    };
  }

    addNote(note){
      let noteArray = this.state.notes;
      noteArray.push(note);
      this.setState({notes: noteArray});
      console.log(this.state);
    };

    render(){
      return(
        <div>
          <NoteForm addNote={this.addNote}/>
        </div>
      )
    }

}

ReactDom.render(<App/>, document.getElementById('root'));
