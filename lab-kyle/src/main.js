'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/home-page';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }
  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }
  render(){
    return (
      <div className="app">
      <header>
        <nav>
          <ul>
            <li><a href="/home_page">Home</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <BrowserRouter>
          <section>
            <Route exact path="/" component={HomePage} />
          </section>
        </BrowserRouter>
      </main>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
