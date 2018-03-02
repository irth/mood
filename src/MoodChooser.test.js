import React from 'react';
import MoodChooser from './MoodChooser';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
  const component = renderer.create(<MoodChooser />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
