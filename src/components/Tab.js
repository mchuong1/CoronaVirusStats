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
    var newgraph
    for(var i = 0; i < tabitems.length; i++){
        if(tabitems[i].style.backgroundColor === "lightgray")
        tabitems[i].style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = "lightgray"
    if(event.target.text === "New"){
      newgraph = document.getElementById("newgraph")
      
    }
  }

  render() {
    return (
        <div className="tab">
            <ul>
                <a id="alltab" className="tabitem" onClick={this.switchTab}>All</a>
                <a className="tabitem" onClick={this.switchTab}>New</a>
                <a className="tabitem" onClick={this.switchTab}>Active</a>
                <a className="tabitem" onClick={this.switchTab}>Recovered</a>
                <a id="deathtab" className="tabitem" onClick={this.switchTab}>Deaths</a>
            </ul>
        </div>
    )
  }

  componentDidMount() {}
}

export default Tab;
