import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);

    this.delete = this.delete.bind(this);
  }
  
  delete(e){
    console.log(e.target);
    this.props.delete(e.target.className);
  }

  render(){
    return(
      <ul>
        {this.props.allNotes.map((note, i) =>
          <li key={note.id}>
            <button className={note.id} onClick={this.delete}> X </button>
            {/* <button class={note.id} */}
            {note.content}
          </li>
        )}
      </ul>
    )
  }
}

export default NoteList;