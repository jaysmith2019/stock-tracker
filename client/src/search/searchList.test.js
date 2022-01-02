import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchList from './searchList'

Enyzme.configure({ adapter: new Adapter()})

describe('SearchList', ()=> {
    it('should render div if params.showlist and params.list.length', () => {
        const params = {
            showList: true,
            list: [{name: 'test', change: 1, changePercent: '1.0', price:'22'}]
        }
        const wrapper = shallow(<SearchList params={params}/>);
        const div = wrapper.find('div');
        expect(div).toHaveLength(1);
    })
} )
