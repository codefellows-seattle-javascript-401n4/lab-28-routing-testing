import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

  }

deleteItem = () => {
  this.props.deleteItem(this.props.note.id);
}

  render() {
    return (
      <li>{this.props.note.content}<button onClick={this.deleteItem}>Delete</button></li>
    )
  }
}

module.exports = NoteItem;
