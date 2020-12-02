import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import App from './App';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import { missionsFixture } from './components/MissionsList.test';

// mock the api so we don't make a call and prep to be told what value to return
jest.mock('./api/fetchMissions');
// console.log(mockFetchMissions);

test("App renders", () => {
  render(<App />);
});

test("App fetches and renders missions data", async () => {
  // tell the test system what we want the mission data to return
  mockFetchMissions.mockResolvedValueOnce(missionsFixture);

  const { getByText, queryallByTestId } = render(<App />);
  const button = getByText(/get data/i);
  fireEvent.click(button);

  getByText(/we are fetching data/i);
  await wait()

  expect(queryAllByTestId("mission")).toHaveLength(0);
})