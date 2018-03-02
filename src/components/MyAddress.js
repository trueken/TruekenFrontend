import React from 'react';

export default class MyAdress extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {value: window.web3.eth.coinbase};
	}
	
	render(){
		
		return <input type="text" name={this.props.name} value={this.state.value} readonly="readonly"/>
	}
}