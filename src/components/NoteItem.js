import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        initiate(this);
    }

    renderNotes = () => {
        if (this.state) {
            return Object.keys(this.state.notes).map(key => {
                let note = this.state.notes[key];
                console.log(note);
                return <li key={key} data-key={key}>{note.content}</li>;
            });
        }
    }
    

    render() {

        return (
            <ul>
                {this.renderNotes()}
            </ul>
        )
    }
}

module.exports = NoteItem;