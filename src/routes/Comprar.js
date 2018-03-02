import React, { Component } from 'react';
import Trueque from '../components/Trueque';

import {ENV} from '../config';

export default class Comprar extends Component {
	
	constructor(props){
		super(props);
		this.state = {};
		this.tokens = {};
		var classRef = this;
		
		fetch(ENV.backend_api + 'contracts')
		.then((response) => response.json())
		.then((responseJson) => {
			for (var i=0; i<responseJson.contracts.length; i++){
				classRef.tokens[responseJson.contracts[i].address] = responseJson.contracts[i];
			}
			this.forceUpdate();
		});
	}
	
	render(){
		let lista = 'No hay ninguna moneda disponible.';
		if (this.tokens){
			lista = [];
			for (var i in this.tokens){
			//for (var i=0; i<this.tokens.length; i++){
				lista.push(<Trueque token={this.tokens[i]}></Trueque>);
			}
		}
		return <div><h1>Comprar</h1>
				<h2>Elige la moneda que quieras comprar</h2>
				{lista}
			</div>
	}
}