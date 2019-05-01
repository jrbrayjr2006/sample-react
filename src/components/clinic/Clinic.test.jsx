import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Clinic from './Clinic';
import Doctors from '../doctors/Doctors';

import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("Suite of tests for Clinic", () => {
    it("renders <Doctors />", () => {
        const wrapper = shallow(<Clinic />);
        expect(wrapper.find(Doctors)).to.have.lengthOf(1);
    });
});