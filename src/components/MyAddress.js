import React from 'react';

export default class MyAdress extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {value: window.web3.eth.coinbase};
	}
	
	render(){
		window.account = window.web3.eth.coinbase;
		var classRef = this;
		var accountInterval = setInterval(function() {
		  if (window.web3.eth.coinbase !== window.account) {
		    window.account = window.web3.eth.coinbase;
		    window.document.location = window.document.location;
		    classRef.setState({value: window.account});
		    classRef.forceUpdate();
		  }
		}, 100);
		return <input type="text" name={this.props.name} value={this.state.value} readonly="readonly"/>
	}
}