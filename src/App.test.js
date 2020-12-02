import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import App from './App';

jest.mock("./api/fetchMissions");
console.log(mockFetchMissions);

test("App fetches missions data and render data", () => {
  mockFetchMissions.mockResolvedValueOnce({ data: [{ mission_id: "one", mission_name: "one name" }] });

  const { getByText } = render(<App />)

  const button = getByText(/get data/i);
  fireEvent.click(button);

  getByText(/we are fetching data/i);
})