import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TotalCasesCard from './components/Cards/TotalCasesCard';
import TotalDeathsCard from './components/Cards/TotalDeathsCard';
import TotalRecoveredCard from './components/Cards/TotalRecoveredCard';
import TotalActiveCard from './components/Cards/TotalActiveCard';

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
    render(<TotalCasesCard totalConfirmed={1} newConfirmed={0}/>, container);
  });
  expect(container.textContent).toBe("Total Confirmed10 New Cases");
});

it("TotalActiveCard renders with a number", () => {
  act(() => {
    render(<TotalActiveCard totalActive={0} newActive={0}/>, container);
  });
  expect(container.textContent).toBe("Total Active00 New Active");
})

it("TotalRecoveredeCard renders with a number", () => {
  act(() => {
    render(<TotalRecoveredCard totalRecovered={0} newRecovered={0}/>, container);
  });
  expect(container.textContent).toBe("Total Recovered00 New Recovered");
});

it("TotalDeathsCard renders with a number", () =>{
  act(()=> {
    render(<TotalDeathsCard totalDeaths={0} newDeaths={0}/>, container);
  });
  expect(container.textContent).toBe("Total Deaths00 New Deaths")
})

