import React from 'react';
import {Link} from 'react-router-dom';

class NoteEdit extends React.Component{
  
  constructor(props) { 
    super(props);
    
    this.state = {
      note: getNote(this.props.location.search.slice(1))
    }
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
    return (
      <div >
        <table>
        <tbody>
          <tr>
            <th>Title:</th>
            <th>Content</th>
          </tr>
          <tr>
              <button id='submitEdits' type="submit">Update Note</button>
            <td><input id='editTitle' placeholder="Note Title" type="text" name="title" onChange={this.handleChange}>
                {this.state.note[0].title}</input></td>
            <td><textarea id='editContent' rows="5" cols="20" placeholder="Content" type="text" name="content" onChange={this.handleChange}>
                  {this.state.note[0].content}</textarea></td>
          </tr>
        </tbody>
        </table>       
      </div>
    );
  }
}

  
export default NoteEdit;