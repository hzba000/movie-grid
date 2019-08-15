
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Homepage} from './Homepage';
configure({adapter: new Adapter()});


describe('<Homepage />', () => {

        it('Renders without crashing', () => {
            shallow(<Homepage storeQuery={()=>{}}/>);
        });
    });
