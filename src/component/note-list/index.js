import React from 'react';
import EditForm from '../edit-form';

class NoteList extends React.Component{
  constructor(props){
    super(props);

    this.delete = this.delete.bind(this);
    this.editNote = this.editNote.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  
  delete(e){
    this.props.delete(e.target.className);
  }
  
  showEdit(e){
    e.preventDefault();
    let newState = [...this.props.allNotes].map(note=> {
      return note.id === e.target.className ? note.editing = true : note.editing = false;
    })
    this.props.updateState(newState);
  }

  editNote(newNote){
    this.props.edit(newNote);
  }
  
  render(){
    return(
      <ul className='note-list'>
        {this.props.allNotes.map((note, i) =>
          <li key={note.id}>
            <button className={note.id} onClick={this.delete}> DELETE </button>
            <button className={note.id} onClick={this.showEdit}> EDIT </button>
            {note.content}
            <EditForm note={note} edit={this.editNote} />
          </li>
          
        )}
      </ul>
    );
  }
}

export default NoteList;