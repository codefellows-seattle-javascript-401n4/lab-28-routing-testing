import React from 'react';
import ReactDom from 'react-dom';

import './styles/app.scss';

import getData from './logics/getData';
import Header from './components/header';
import SearchForm from './components/searchForm';
import SearchResultList from './components/searchResultList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      redditList: [],
    };
  }

  getData(searchFormBoard, searchFormLimit) {
    const url = `http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
    getData(url).then((result) => {
      const redditList = result.body.data.children;
      this.setState({ redditList });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchForm getData={this.getData} />
        <SearchResultList redditList={this.state.redditList} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
