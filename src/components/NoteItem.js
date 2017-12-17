import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

const NoteItem = ({content, removeItem}) => {
    return(
        <li className="note-item">{content}
            <button onClick={removeItem}>Delete Me</button>
        </li>
    );
}
export default NoteItem;