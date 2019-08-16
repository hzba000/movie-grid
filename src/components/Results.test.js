
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Results} from './Results';
configure({adapter: new Adapter()});


describe('<Results />', () => {

        it('Renders without crashing', () => {
            shallow(<Results />);
        });
});
