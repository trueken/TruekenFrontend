import React, { Component } from 'react';
import Select from '../components/Select';
import Moneda from '../components/Moneda';
import MyAddress from '../components/MyAddress';
import InputEthers from '../components/InputEthers';
import {ENV} from '../config';
//import Config from '../Config';
//var Config = require('../Config')

export default class Vender extends Component {
	
	constructor(props){
		super(props);
		this.coinbase = window.web3.eth.coinbase;
	}
	
	
  render() {
    return (
    <div>
      <h1>Vender</h1>
      <label>Mi cartera</label><br/>
      <MyAddress name="address" value={this.coinbase}/><br/>
      <label>Mi moneda</label><br/>
      <SelectContrato id="contrato" name="direccion">
      </SelectContrato>
      <label>Precio (ETH)</label><br/>
      <InputEthers label="ETH/ud."/><br/>
    </div>
    );
  }
}

class SelectContrato extends Select{
	
	constructor(props){
		super(props);
		this.monedas = {};
		this.state.onChange = function(event){
			this.moneda = this.monedas[event.target.value];
			fetch(ENV.backend_api + 'contract/' + event.target.value)
			.then((response) => response.json())
			.then((responseJson) => {
				this.moneda["trades"] = responseJson;
				this.forceUpdate();
			});
			this.forceUpdate();
		}
		//para que el this sea visible en el handler
		this.state.onChange = this.state.onChange.bind(this);
	}
	
	componentDidMount(){
		//var coinbase = window.web3.eth.coinbase;
		//alert(JSON.stringify(Configuracion));
		var url = ENV.addinfo.replace(/\[address\]/g, window.web3.eth.coinbase);
		//var url = 'https://api.ethplorer.io/getAddressInfo/' + coinbase + '?apiKey=freekey';
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.state.options = [];
			this.state.options.push(
					<option>- selecciona una de tus monedas -</option>
			);
			if (typeof responseJson.tokens !== 'undefined'){
				for (var i=0; i<responseJson.tokens.length; i++){
					var option = responseJson.tokens[i];
					this.monedas[option.tokenInfo.address] = option;
					this.state.options.push(
		                <option key={i} value={option.tokenInfo.address}>{option.tokenInfo.name}</option>
		            );
				}
			}else{
				this.addError('No se han encontrado monedas para vender en tu cartera.');
			}
			this.forceUpdate();
		});
		
		
	}
	
	render(){
		
		
		
		if (typeof this.moneda!== 'undefined'){
			return super.render(<Moneda token={this.moneda}></Moneda>);
		}	
		return super.render();
		//return /*(typeof this.moneda!== 'undefined' ? '<Moneda></Moneda>' : '')*/ super.render();
	}
}
