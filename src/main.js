'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import NoteCreateForm from '../src/components/noteCreateForm.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notesList: [],
    };
  }
  render(){
    return(
      <div>
      <NoteCreateForm />

      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
