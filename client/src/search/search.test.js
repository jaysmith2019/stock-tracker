import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './search'

Enyzme.configure({ adapter: new Adapter()})

describe('Search', ()=> {
    it('should render title Stock Comparison', () => {
        const wrapper = shallow(<Search/>);
        const title = wrapper.find('span#title');
        expect(title.text()).toEqual('Stock Comparison');
    })
    it('should render a description notifying the user of how many stocks they can add.', () => {
        const wrapper = shallow(<Search/>);
        const description = wrapper.find('span#description');
        expect(description.text()).toEqual('Enter up to 3 stocks to compare the current stock prices');
    })
} )
