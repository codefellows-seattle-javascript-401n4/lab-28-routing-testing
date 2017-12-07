import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
  render() {
    const {
      noteList,
    } = this.props;

    const listItems = noteList.map(ele =>
      (
        <li key={ele.id}>
          <p>{ele.content}</p>
        </li>
      ));
    return (
      <ul>{listItems}</ul>
    );
  }
}

NoteList.propTypes = {
  noteList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
