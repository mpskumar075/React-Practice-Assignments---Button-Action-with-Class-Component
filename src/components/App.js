import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			showPara: false;
		};
	}

	
renderPara() {
this.setState((curState) => {
    return {showPara: !curState.showPara};
});
}

    render() {
    	return(
    		<div id="main">
				
       <button id="click" onClick={this.renderPara.bind(this)}>Click!!</button>
       {
           this.state.showPara?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null
       }
        </div>
    		
    	);
    }
}


export default App;

