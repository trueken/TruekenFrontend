import React from 'react';

export default class InputEthers extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			label : 'ETH',
			changeLabel: 'USD',
			lastvalue: '',
			number: '',
			errors: [],
			style: {
				'text-align': "right"
			}
		}
		if (this.props.label !== undefined){
			this.state.label = this.props.label;
		}
		if (this.props.changeLabel !== undefined){
			this.state.changeLabel = this.props.changeLabel;
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
				/*onChange="function(){}"*/></input>{this.state.label}<br/>
			<input type="text" style={this.state.style} readonly="readonly" value={this.state.usdValue}/>{this.state.changeLabel}
		</div>
		);
	}
}