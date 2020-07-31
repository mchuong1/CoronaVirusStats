import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer"
import { act } from "react-dom/test-utils";
import TotalCasesCard from './components/Cards/TotalCasesCard';
import TotalDeathsCard from './components/Cards/TotalDeathsCard';
import TotalRecoveredCard from './components/Cards/TotalRecoveredCard';
import TotalActiveCard from './components/Cards/TotalActiveCard';
import Tab from "./components/Tab"
import SideNavBar from './components/SideNavBar'
import CountryList from './components/CountryList';
import { BrowserRouter } from 'react-router-dom';
import World from './components/World';
import ActiveCaseGraph from './components/Graphs/ActiveCaseGraph';
import DeathGraph from './components/Graphs/DeathGraph';
import RecoveredGraph from './components/Graphs/RecoveredGraph';
import NewCasesGraph from './components/Graphs/NewCasesGraph';

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

var stubdata = [0, 0, 1, 2, 3]
var stubdates = ['1/21', '1/22', '1/23', '1/24', '1/25']
var stubcountries = ['United States of America', 'Vietnam', 'China', 'Canada', 'South Korea']

jest.mock('react-chartjs-2', () => ({
  Line: () => null
}))

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

//SnapShot Testing
test('Tab renders correctly', () => {
  const tree = renderer.create(<Tab />).toJSON();
  expect(tree).toMatchSnapshot();
})

test('TotalActiveCard renders correctly', () => {
  const tree = renderer
  .create(<TotalActiveCard totalActive={0} newActive={0}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('TotalConfirmedCard renders correctly', () => {
  const tree = renderer
  .create(<TotalCasesCard totalConfirmed={1} newConfirmed={0}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('TotalRecoveredCard renders correctly', () => {
  const tree = renderer
  .create(<TotalRecoveredCard totalRecovered={0} newRecovered={0}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('TotalDeathsCard renders correctly', () => {
  const tree = renderer
  .create(<TotalDeathsCard totalDeaths={0} newDeaths={0}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('SideNavBar renders correctly', () => {
  const tree = renderer
  .create(
    <BrowserRouter>
      <SideNavBar />
    </BrowserRouter>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('CountryList renders correctly', () => {
  const tree = renderer
  .create(<CountryList countries={stubcountries}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('World renders correctly', () => {
  const tree = renderer
  .create(<World />)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('ActiveGraph renders correctly', ()=> {
  const tree = renderer
  .create(<ActiveCaseGraph data={stubdata} dates={stubdates} />)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('DeathGraph renders correctly', () => {
  const tree = renderer
  .create(<DeathGraph data={stubdata} dates={stubdates}/>)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('RecoveredGraph renders correctly', () => {
  const tree = renderer
  .create(<RecoveredGraph data={stubdata} dates={stubdates} />)
  .toJSON()
  expect(tree).toMatchSnapshot()
})

test('NewCasesGraph renders correctly', () => {
  const tree = renderer
  .create(<NewCasesGraph data={stubdata} dates={stubdates} />)
  .toJSON()
  expect(tree).toMatchSnapshot()
})