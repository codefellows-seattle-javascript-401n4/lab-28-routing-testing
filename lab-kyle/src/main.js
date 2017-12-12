'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteCreateForm from './components/note-create-form';
import NoteList from './components/note-list';

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
            <li><a href="/note_list">Notes</a></li>
            <li><a href="/note_create_form">Create a Note</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <BrowserRouter>
          <section>
            <Route exact path="/note_list" component={NoteList} />
            <Route exact path="/note_create_form" component={NoteCreateForm} />
          </section>
        </BrowserRouter>
      </main>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
