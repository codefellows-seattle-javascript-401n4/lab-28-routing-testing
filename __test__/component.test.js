import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect'

Enzyme.configure({ adapter: new Adapter() });

import NoteCreateForm from '../src/components/NoteCreateForm';
import NoteItem from '../src/components/NoteItem';

test('Test typing note contents, submitting the note, and it saving it to state', () => {
  


    const component = shallow(<NoteCreateForm/>); 
    component.find('#textInput').simulate('change', {
        target: {value: 'test note content'}
    });

    component.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    Object.keys(component.state('notes')).map(key => {
        expect(component.state('notes')[key].content).toEqual('test note content');
    });
});

test('Test removing a note from the app state', () => {
    let deleteNote = sinon.spy();

    const note = shallow(<NoteItem content={"testNoteContent"} removeItem={deleteNote}/>);
    
    note.find('button').simulate('click');

    expect(deleteNote.calledOnce).toEqual(true);
});