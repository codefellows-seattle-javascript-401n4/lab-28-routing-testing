import React from 'react';
import {Link} from 'react-router-dom';
import {getNote} from '../lib/helpers';


class NoteEdit extends React.Component{
  
  constructor(props) { 
    super(props);
    
    this.state = {
      note: getNote(location.search.slice(1))
    }
    this.handleChange = this.handleChange.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value, editing: true})
  }
  
  updateNote(e) {
      e.preventDefault();
      this.setState({completed: true, editing: true});
      this.props.handler(this.state);
  }
  
  render() {
    const note = this.state.note[0];

    return (
      <div id='NoteEdit'>
        <table>
        <tbody>
          <tr>
            <th>Title:</th>
            <th>Content</th>
          </tr>
          <tr>
            <td><input id='editTitle' placeholder='Enter new title' type="text" name="title" onChange={this.handleChange}/></td>
            <td><textarea id='editContent' placeholder='Enter new content' rows="5" cols="20" type="text" name="content" onChange={this.handleChange}/></td>
          </tr>
        </tbody>
        </table> 
        <button id='submitEdits' type="submit" onSubmit={this.updateNote}>Update Note</button>
        <Link to={`/note/id?${note.id}`}>Cancel</Link>      
      </div>
    );
  }
}

  
export default NoteEdit;

