import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state={msg : ""}
	    this.show=this.show.bind(this)
	};
	
	show() {
	this.setState({msg : <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>})
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		
		<button id="click" onClick={this.show}>click</button>
		{this.state.msg}
    		</div>
    	);
    }
}


export default App;