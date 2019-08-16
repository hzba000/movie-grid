import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Main} from './Main';

configure({adapter: new Adapter()});


describe('<Main />', () => {

    it('Renders without crashing', () => {
        shallow(<Main />);
    });

})