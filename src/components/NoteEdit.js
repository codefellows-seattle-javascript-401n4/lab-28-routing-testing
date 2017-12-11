import React from 'react';
import {Link} from 'react-router-dom';

class NoteEdit extends React.Component{
  
  constructor(props) { 
    super(props);
    
    this.state = {
      note: getNote(this.props.location.search.slice(1))
    }

   
  }
 
  
    render() {
      return (
        <div >EDit Note
        </div>
      );
    }
}

  
export default NoteEdit;