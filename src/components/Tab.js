import React from "react";

class Tab extends React.Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
    this.switchTab = this.switchTab.bind(this)
  }
  switchTab(event){
    var tabitems = document.getElementsByClassName("tabitem");
    for(var item in tabitems){
        if(item.style.backgroundColor === "lightgray")
        item.style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = "lightgray"
  }

  render() {
    return (
        <div className="tab">
            <ul>
                <a className="tabitem" onClick={this.switchTab} style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px' }}>All</a>
                <a className="tabitem" onClick={this.switchTab}>New</a>
                <a className="tabitem" onClick={this.switchTab}>Active</a>
                <a className="tabitem" onClick={this.switchTab}>Recovered</a>
                <a className="tabitem" onClick={this.switchTab} style={{borderTopRightRadius:'20px',borderBottomRightRadius:'20px' }}>Deaths</a>
            </ul>
        </div>
    )
  }

  componentDidMount() {}
}

export default Tab;
