import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);

  }
  
  render(){
    return(
      <ul>
        {this.props.notes.map((note, i) =>
          <li key={i}>
            <button onClick={this.props.delete}>X</button>
            {note.content}
          </li>
        )}
      </ul>
    )
  }
}

export default NoteList;