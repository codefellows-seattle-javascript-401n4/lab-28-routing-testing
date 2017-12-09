import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

import NoteItem from './NoteItem.js';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        initiate(this);
    }


    removeNote = (key) => {
        let localNotes = {...this.state.notes};
        delete localNotes[key];

        updateState({notes: {...localNotes}});
    }
    renderNotes = () => {
        console.log("Hello");
        return <NoteItem note={"hello"} removeNote={() => this.removeNote()}/>;
    }

    renderList = () => {
        if (this.state) {
            return Object.keys(this.state.notes).map(key => {
                let note = this.state.notes[key];
                return <NoteItem key={key} content={"hello"} removeItem={() => this.removeNote(key)}/>;
            });
        }
    }

    render() {

        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

module.exports = NoteList;