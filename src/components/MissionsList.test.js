import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';

test('MissionsList renders', () => {
  render(<MissionsList missions={[]} />);
})