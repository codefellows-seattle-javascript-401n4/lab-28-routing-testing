import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);

    this.delete = this.delete.bind(this);
  }
  
  delete(e){
    this.props.delete(e.target.id);
  }

  render(){
    return(
      <ul>
        {this.props.allNotes.map((note, i) =>
          <li id={note.id} key={note.id} onClick={this.delete}>
            {note.content}
          </li>
        )}
      </ul>
    )
  }
}

export default NoteList;