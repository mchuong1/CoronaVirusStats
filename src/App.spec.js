import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TotalCasesCard from './components/Cards/TotalCasesCard';
import TotalDeathsCard from './components/Cards/TotalDeathsCard';
import TotalRecoveredCard from './components/Cards/TotalRecoveredCard';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

var stubdata = [
  {
    Active: 1,
    City: "",
    CityCode: "",
    Confirmed: 1,
    Country: "United States of America",
    CountryCode: "",
    Date: "2020-01-22T00:00:00Z",
    Deaths: 0,
    Lat: "0",
    Lon: "0",
    Province: "",
    Recovered: 0
  }, 
  {
    Active: 1,
    City: "",
    CityCode: "",
    Confirmed: 1,
    Country: "United States of America",
    CountryCode: "",
    Date: "2020-01-23T00:00:00Z",
    Deaths: 0,
    Lat: "0",
    Lon: "0",
    Province: "",
    Recovered: 0
  }]

it("TotalCasesCard renders with a number", () => {
  act(() => {
    render(<TotalCasesCard data={stubdata}/>, container);
  });
  expect(container.textContent).toBe("Total Cases Confirmed10 New Cases");
});

it("TotalRecoveredctiveCard renders with a number", () => {
  act(() => {
    render(<TotalRecoveredCard data={stubdata}/>, container);
  });
  expect(container.textContent).toBe("Total Recovered00 New Recovered");
});

it("TotalDeathsCard renders with a number", () =>{
  act(()=> {
    render(<TotalDeathsCard data={stubdata}/>, container);
  });
  expect(container.textContent).toBe("Total Deaths00 New Deaths")
})

