import React from 'react';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.setState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="note">Note content
          <textarea
            rows="10"
            cols="50"
            placeholder="enter a new note"
            id="content"
            onChange={this.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteCreateForm;
