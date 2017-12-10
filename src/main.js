import './style/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header';
import CreateNoteComp from './components/create-note-comp';
import NoteList from './components/note-list-comp';
import Footer from './components/footer';



let renderIf = (test, component) => test ? component : undefined;


class App extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            notes: []
        }

        this.createNote = this.createNote.bind(this);
        this.noteList = this.noteList.bind(this);
    }

    createNote(note) {
        note.id = uuid.v4()
        note.edited = false
        note.complete = false
        this.setState(state => ({
            notes: [...state.notes, note]
        }))
        console.log(this.state.notes);
    }
    
    render() {
        return (
            <div>
                <Header appTitle="React App" />
                
                <CreateNoteComp createNote={this.createNote} />
                <NoteList notes={this.state.notes} />
                
                
                <Footer>
                    <p>&copy;2017 Big Cheese</p>
                </Footer>
            </div>
        )
    }
    
}

ReactDom.render(<App/>, document.getElementById('root'));