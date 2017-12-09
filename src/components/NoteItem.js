import React from 'react';
import ReactDom from 'react-dom';
import {initiate, updateState} from 'share-state';

const NoteItem = ({content, removeItem}) => {
    return(
        <li onClick={removeItem}>{content}</li>
    );
}
export default NoteItem;