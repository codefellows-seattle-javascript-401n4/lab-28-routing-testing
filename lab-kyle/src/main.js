'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


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
      <div>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
