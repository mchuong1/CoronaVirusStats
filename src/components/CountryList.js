import React from "react"

class CountryList extends React.Component {
  constructor(){
    super()
    this.state = {
      suggestions: [],
      text: ''
    }
    this.filterCountries = this.filterCountries.bind(this)
  }

  filterCountries(event){
    var value = event.target.value
    var suggestions = []
    var { countries } = this.props
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = countries.sort().filter(v=>regex.test(v.Country))
    }
    this.setState(() => ({suggestions, text: value}))
  }

  renderSuggestions(){
    var { suggestions } = this.state
    if(suggestions.length === 0) return null
    return (
      <ul>
        {suggestions.map((item) => <li key={suggestions.ISO2} onClick={() => this.suggestionSelected(item)}>{item.Country}</li>)}
      </ul>
    )
  }

  suggestionSelected(value){
    var { getCountryStats } = this.props
    this.setState(()=> ({
      text:value.Country,
      suggestions: []
    }))
    getCountryStats(value)
  }

  render() {
    var { text } = this.state
    return( 
      <div className="autocomplete">
        <input type="text" onChange={this.filterCountries} value={text} placeholder="Enter a country..."/>
        {this.renderSuggestions()}
      </div>
    )
  }
}

export default CountryList;
