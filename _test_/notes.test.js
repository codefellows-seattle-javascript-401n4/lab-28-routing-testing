import React from 'react';
import renderer from 'react-test-renderer';
import Jest from 'jest';
import NoteCreateForm from '../src/components/noteCreateForm.js';
import uuid from 'uuid/v1';


test('create a new note with the content pizza, editing false, and completed true', () => {
  let content = 'pizza';
  let editing = false;
  let completed = true;
  let createNote = (state) => {
    expect(NoteCreateForm.state().content).toBe('pizza');
    expect(NoteCreateForm.state().editing).toBe(false);
    expect(NoteCreateForm.state().completed).toBe(true);
  };

  const component = renderer.create(
    <NoteCreateForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail because of change in content', () => {
  const component = renderer.create(
    <NoteCreateForm content=''/>
  );

  const other = renderer.create(
    <NoteCreateForm content='sushi'/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(other).toBe(tree);
});

test('should pass with unique ids',() => {
  const component = renderer.create(
    <NoteCreateForm id='2222'/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail with non unique ids', () => {
  const component = renderer.create(
    <NoteCreateForm id='2222'/>
  );
  const other = renderer.create(
    <NoteCreateForm id='2222'/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(other).toBe(tree);

});
