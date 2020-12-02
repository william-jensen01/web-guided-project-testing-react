import React from 'react';
import { getByText, render } from '@testing-library/react';
import MissionsList from './MissionsList';

export const missionsFixture = [
    {
        mission_name: 'mission one',
        mission_id: 'mission_one',
        description: 'description of mission one'
    },
    {
        mission_name: 'mission two',
        mission_id: 'mission_two',
        description: 'description of mission two'
    }
];

test("MissionsList render", () => {
    render(<MissionsList missions={[]} error="" />);
});

test("MissionsList shows data when rerendered with new submission data", () => {
    const { queryAllByTestId, rerender, getByText } = render(<MissionsList missions={[]} error="" />);
    
    expect(queryAllByTestId('mission')).toStrictEqual([]);
    expect(queryAllByTestId('mission')).toHaveLength(0);

    rerender(<MissionsList error='' missions={missionsFixture} />);

    expect(queryAllByTestId('mission')).toHaveLength(2);
    // expect(queryAllByTestId('mission')).toStrictEqual(missionsFixture)

    const error = "my dumb error";
    rerender(<MissionsList error={error} />);

    expect(() => getByText(error)).not.toThrow();
    expect(queryAllByTestId('mission')).toHaveLength(0);
});

test("MissionsList renders with description", () => {
    const { getByText } = render(<MissionsList missions={missionsFixture} error="" />);

    expect(getByText(/description of mission one/i)).toBeDefined()
})