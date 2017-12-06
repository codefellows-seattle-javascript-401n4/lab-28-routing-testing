import React from 'react';
import PropTypes from 'prop-types';

class SearchResultList extends React.Component {
  render() {
    const {
      redditList,
    } = this.props;

    const listItems = redditList.map(ele =>
      (
        <li key={ele.data.id}>
          <a target="_blank" href={ele.data.url}>{ele.data.title}</a>
          <p>ups: {ele.data.ups}</p>
        </li>
      ));
    return (
      <ul>{listItems}</ul>
    );
  }
}

SearchResultList.propTypes = {
  redditList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResultList;
