import React from 'react';
import NoteForm from '../note-form';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  render(){
    return (
      <div>
        <h1> Sup Betches </h1>
        <NoteForm />
      </div>
    )
  }
}

export default App;