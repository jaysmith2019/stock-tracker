import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StockContainer from './stockContainer'

Enyzme.configure({ adapter: new Adapter()})

describe('StockContainer', ()=> {
    it('should render div if stocks are present', () => {
        const stocks = [{name: 'test stock', change: 1, price: '1.5', high: '5', low: '3'}];
        const wrapper = shallow(<StockContainer stocks={stocks}/>);
        const div = wrapper.find('div#container');
        expect(div).toHaveLength(1);
    })
} )
