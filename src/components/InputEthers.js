import React from 'react';

export default class InputEthers extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			lastvalue: '',
			number: '',
			errors: [],
			style: {
				'text-align': "right"
			}
		}
	}
	
	onInput(event){
		this.setState({
			number: event.target.value
	    });
		if(!isNaN(event.target.value)){
			this.setState({
				lastvalue: event.target.value,
		    });
			
			var ethers = event.target.value;
			
			//alert(window.USD4ETH);
			this.setState({usdValue : (window.USD4ETH * ethers)});
			this.forceUpdate();
		}else{
			this.setState({
		        number: this.state.lastvalue
		    });
		}
		
		this.forceUpdate();
	}
	
	render () {
		return(
		<div class="">
			<input type="text" style={this.state.style} name={this.props.name} value={this.state.number} 
				onChange={this.onInput.bind(this)}
				/*onChange="function(){}"*/></input>ETH/ud.<br/>
			<input type="text" style={this.state.style} readonly="readonly" value={this.state.usdValue}/>USD/ud.
		</div>
		);
	}
}