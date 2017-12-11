import React from 'react';


class NoteList extends React.Component {
    
    constructor(props) { 
        super(props);

        this.deleteNote = this.deleteNote.bind(this);
    }
    
    deleteNote(e) {
        e.preventDefault();

        let id = e.target.dataset['key'];
        this.props.handler(id)
    }
    
    render() {
        const {notes} = this.props;
        return (
          <div id="noteList">       
            { notes.map((note, i) => {
              return(
                <ul>
                  <li key={i}><a onClick={this.deleteNote} data-key={note.id} href="#">Delete</a></li> 
                  <li key={note.id}><a href='/note'>{note.title}</a></li>
                </ul>
              )
            })}               
          </div>
        );      
    }
}

export default NoteList;