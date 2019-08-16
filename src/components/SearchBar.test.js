
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SearchBar} from './SearchBar';
configure({adapter: new Adapter()});


describe('<SearchBar />', () => {

        it('Renders without crashing', () => {
            shallow(<SearchBar />);
        });
});
