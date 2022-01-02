import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

Enyzme.configure({ adapter: new Adapter()})

describe('Header', ()=> {
    it('should render a header with a title that says Stock Tracker.', () => {
        const wrapper = shallow(<Header/>);
        const title = wrapper.find('h3');
        expect(title.text()).toEqual('Stock Tracker');
    })
} )
