import React from 'react';
import InputEthers from '../components/InputEthers';

import {ENV} from '../config';

export default class Trueque extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};
		window.web3.eth.getBalance(window.web3.eth.coinbase, function(err, value){
			alert(value/10**18)
		});
	}
	
	onClick(){
		fetch(ENV.backend_api + 'trades/' + this.props.token.address)
		.then((response) => response.json())
		.then((responseJson) => {
			for (var i=0; i<responseJson.trades.length; i++){
				//TODO buscar su saldo en RPC i parar si tiene
				this.setState({
					"precio": 1/responseJson.trades[i].price,
					"direccion": responseJson.trades[i].direccion
				});
				break;
			}
			this.forceUpdate();
		});
	}
	
	render(){
		
		let max = Math.min(0, 2);
		
		let precio = <a onClick={this.onClick.bind(this)}>Ver precio</a>;
		if (this.state.precio != undefined){
			precio = <span>
				<b>Precio: </b>{this.state.precio} {this.props.token.ticker} por ETH<br/>
				<InputEthers label="ETH" max={max} changeLabel="ZZZ"/>
			</span>
		}
		return <div>
			<b>Moneda:</b> {this.props.token.name} ({this.props.token.ticker})<br/>
			{precio}
		</div>
	}
}