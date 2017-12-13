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
    this.getApp = this.getApp.bind(this);
  }
  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }
  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }
  render(){
    return (
      <div className="app">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <BrowserRouter>
          <section>
            <Route exact path="/" component={() => <HomePage app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
