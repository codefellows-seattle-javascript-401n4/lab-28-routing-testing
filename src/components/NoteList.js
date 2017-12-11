import React from 'react';


class NoteList extends React.Component {
    
    constructor(props) { 
        super(props);

        this.deleteNote = this.deleteNote.bind(this);
    }
    
    deleteNote(e) {
        e.preventDefault();

        let id = e.target.dataset['key'];
        console.log(id);
        this.props.handler(id)
    }
    
    render() {
        console.log('this.props is ', this.props)
        const {notes} = this.props;
        return (
          <div className="notes-list">  
                
                  { notes.map((note, i) => {

                    return(
                      <ul>
                        <li key={i}><a onClick={this.deleteNote} data-key={note.id} href="#">Delete</a></li> 
                        <li key={note.id}>{note.title}</li>
                      </ul>
                    )
                  })}               
          </div>
        );      
    }
}

export default NoteList;