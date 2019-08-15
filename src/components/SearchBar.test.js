
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SearchBar} from './SearchBar';
configure({adapter: new Adapter()});


describe('<SearchBar />', () => {

        it('Renders without crashing', () => {
            shallow(<SearchBar />);
        });

        // it('submit event when click submit', () => {
        //     const callback = jest.fn();
        //     const wrapper = mount(<SearchBar storeQuery={()=>{}}/>);
        //     wrapper.find('.search-button').simulate('click');
        //     expect(callback).toHaveBeenCalled();
        //   });
        
        // it('should have parent method', () => {
        //     const wrapper = mount(<SearchBar />)
        //     expect(wrapper.defaultProps.storeQuery).toBeDefined();
        // })

    });
