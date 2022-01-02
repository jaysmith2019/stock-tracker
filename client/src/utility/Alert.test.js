import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Alert from './Alert';


Enyzme.configure({ adapter: new Adapter()})

describe('Alert', ()=> {
    it('should render a message passed in a property', () => {
        const wrapper = shallow(<Alert open={true} message={'This is a test'}/>);
        const message = wrapper.find('span#message');
        expect(message.text()).toEqual('This is a test');
    })
} )
