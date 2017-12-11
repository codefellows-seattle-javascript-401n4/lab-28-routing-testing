import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import {getNote} from '../lib/helpers';

class NoteItem extends React.Component {

  constructor(props) { 
    super(props);
    
    this.state = {
      note: getNote(this.props.location.search.slice(1))
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleClick() {
    console.log('single click');
  }

  handleDoubleClick() {
    console.log('double click');
  }

  callback(item) {
    item = ReactDOM.findDOMNode(this);
    item.ondblclick = this.handleDoubleClick;
  }

    
    render() {
       let note = this.state.note[0];
       console.log(note.title);
       return (
          <div id='NoteItem'>
            <Link id='backButton' to="/">Back</Link>
            <table>
              <tbody>
                <tr>
                  <th>Title:</th>
                  <th>Content</th>
                </tr>
                <tr>
                  <td>{this.state.note[0].title}</td>
                  <td>{this.state.note[0].content}</td>
                </tr>
              </tbody>
            </table>
            <Link id='editNote' to={`/note/edit/id?${this.state.note[0].id}`}>Update</Link>
            </div>
       )
      }
}
export default NoteItem;