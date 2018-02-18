import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect'

Enzyme.configure({ adapter: new Adapter() });

import CreateForm from '../src/components/CreateForm';
import NoteItem from '../src/components/NoteItem';

test('Test entering input and saving it in state, ready to be added to note as the content', () => {

    const component = shallow(<CreateForm/>);
    component.find('#content').simulate('change', {
        target: {value: 'test note content'}
    });

    component.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(component.state().content).toEqual('test note content');
});

test('Test clicking delete to delete a note', () => {
    let deleteNote = sinon.spy();

    const note = shallow(<NoteItem note={{content: 'hello'}} deleteItem={deleteNote}/>);

    note.find('button').simulate('click');

    expect(deleteNote.calledOnce).toEqual(true);
});
