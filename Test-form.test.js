import React from 'react';
import App from './Test-form';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Test-form />).toJSON();
  expect(rendered).toBeTruthy();
});
