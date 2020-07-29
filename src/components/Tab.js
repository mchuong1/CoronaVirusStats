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
    var graphs = document.getElementsByClassName("graph")
    var { text, style } = event.target
    var targetGraph = document.getElementById(text);
    for(var i = 0; i < tabitems.length; i++){
        tabitems[i].style.backgroundColor = "white"
    }
    if(text !== "All"){
      for(var i = 0; i < graphs.length; i++){
        graphs[i].style.display = "none"
      }
      targetGraph.style.display = "block"
      targetGraph.className += " active"
    } 
    else {
      for(var i = 0; i < graphs.length; i++){
        graphs[i].style.display = "block"
        if(graphs[i].className.indexOf("active") > 1){
          graphs[i].className = graphs[i].className.replace("active", "")
        }
      }
    }
    style.backgroundColor = "lightgray"
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
}

export default Tab;
