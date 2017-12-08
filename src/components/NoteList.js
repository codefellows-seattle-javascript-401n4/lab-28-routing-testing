import React from 'react';
import ReactDom from 'react-dom';
import {initiate, sendEvent} from 'share-state';

import NoteItem from './NoteItem.js'

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        initiate(this);
    }

    render() {
        return (
            <div>
                This is NoteList.js
                <NoteItem /> 
            </div>
        );
    }
}

module.exports = NoteList;