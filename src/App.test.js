import React from 'react';
import { render } from '@testing-library/react';
import { fetchMissions as mockFetchMissions } from './api/fetchMissions';
import App from './App';

jest.mock("./api/fetchMissions");
console.log(mockFetchMissions);

test("App fetches missions data and render data", () => {
  mockFetchMissions.mockResolvedValueOnce({ data: [] });

  render(<App />)
}