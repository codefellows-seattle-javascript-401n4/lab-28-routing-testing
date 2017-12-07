import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      searchFormBoard: '',
      searchBoardLimit: 30,
    };
  }

  onChange(event) {
    const key = event.target.id;
    const value = event.target.value.toLowerCase();
    this.setState({ [key]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.getData(this.state.searchFormBoard, this.state.searchBoardLimit);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="searchFormBoard">Form Board
          <input type="text" id="searchFormBoard" onChange={this.onChange} />
        </label>
        <label htmlFor="searchBoardLimit">Number of results
          <input type="text" value="30" id="searchBoardLimit" onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default SearchForm;
