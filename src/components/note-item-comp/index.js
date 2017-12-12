'use strict';

import React from 'react';

import CreateNoteComp from '../create-note-comp';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.note.content
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleUpdate(e) {
    this.setState(state => ({ editing: !state.editing }))
  }

  handleDelete(e) {
    this.props.deleteNote(this.props.note.id)
  }

  handleChange(e) {
    let content = e.target.value
    this.setState({ content })
  }
  render() {
    return (
      <div onDoubleClick={this.handleUpdate}>
        {renderIf(
          this.state.editing,
          <div>
            <input
              name='update'
              type='text'
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
        )}

        {renderIf(
          !this.state.editing,
          <div>
            {this.props.note.content}
            <button onClick={this.handleDelete}>Delete Note</button>
          </div>
        )}
      </div>
    )
  }
}

  
export default NoteItem;