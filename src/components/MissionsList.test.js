import React from 'react';
import { render } from '@testing-library/react';
import MissionsList from './MissionsList';

const missions = [
  {
    mission_id: "one",
    mission_name: "stupid space mission"
  },
  {
    mission_id: "two",
    mission_name: "stupider space mission"
  }
]

test('MissionsList renders', () => {
  render(<MissionsList missions={[]} />);
})

test("MissionsList shows data when rerendered with new missions data", () => {
  const { queryAllByTestId, rerender } = render(<MissionsList missions={[]} />)

  expect(queryAllByTestId("mission")).toStrictEqual([]);
  expect(queryAllByTestId("mission")).toHaveLength(0);

  rerender(<MissionsList missions={missions} />);

  expect(queryAllByTestId("mission")).toHaveLength(2);
})