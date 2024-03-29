import React from "react"

class CountryList extends React.Component {
  constructor(){
    super()
    this.state = {
      suggestions: [],
      text: ''
    }
  }

  filterCountries = (event) => {
    var value = event.target.value;
    var suggestions = [];
    var { countries } = this.props;
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = countries.sort().filter(v=>regex.test(v.name))
    }
    this.setState(() => ({suggestions, text: value}))
  }

  renderSuggestions(){
    var { suggestions } = this.state
    if(suggestions.length === 0) return suggestions
    return (
      <ul>
        {suggestions.map((item) => <li key={suggestions.iso} onClick={() => this.suggestionSelected(item)}>{item.name}</li>)}
      </ul>
    )
  }

  suggestionSelected(value){
    var { getCountryStats } = this.props
    this.setState(()=> ({
      text:value.name,
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
