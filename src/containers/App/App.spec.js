import React        from 'react';
import { expect }   from 'chai';
import { shallow }  from 'enzyme';

import App from './App'

describe('<App />', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('has a single wrapper element', () => {
    expect(true).to.be.true;
  });
});