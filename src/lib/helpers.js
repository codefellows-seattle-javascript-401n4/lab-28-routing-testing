'use strict';

export const renderIf = (test, component) => {
    return test ? component : undefined
}

export const saveNote = (note) => {
    
    let notes = getAllNotes();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

export const getNote = (id) => {
        
    return new Promise( (resolve,reject) => {
        let note = localStorage.getItem(id);
        if (note) { resolve( JSON.parse(note)); }
        else { reject("Invalid note id", id); }
    });
    
}

export const removeNote = (id) => {
  localStorage.removeItem(id);
}
    
export const getAllNotes = () => {
        
  return JSON.parse(localStorage.getItem("notes") || "[]");
 
}