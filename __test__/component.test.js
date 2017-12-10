import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteCreateForm from '../src/components/NoteCreateForm';

test('Test the Submit button and make sure it saves the input', () => {
    const component = mount(<NoteCreateForm />);    

    console.log(component.find('form')[0]);
    
});