import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'

import Navbar from './component/navbar/navbar.js'
import Note from './component/note/note.js'


//write module
//nav html being rendered
class App extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            name:0,
            body:[],
            showErrors:true
        }

        this.app = this.app.bind(this);
        this.updateNotebook = this.updateNotebook.bind(this);

    }

    componentDidMount() {
        console.log("__STATE__", this.state);
    }

    updateNotebook(notebook) {
        this.setState({notebook})
    }

    app() {
        return {
            state: this.state,
            setState: this.setState.bind(this),
            showErrors: true
        }
    }

  render(){
    return (
      <div>
        <Navbar />
        <main>
          Bloop.
          <Note />
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
