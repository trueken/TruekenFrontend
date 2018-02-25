import React from "react";
import { Link } from 'react-router-dom';
import Footer from "./components/Footer";
import logo from './logo.svg';
import './App.css';

window.appAPI = 'http://127.0.0.1:8000/api/';

export default class Layout extends React.Component {
	componentDidMount(){
		fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD")
		.then((response) => response.json())
		.then((responseJson) => {
			window.USD4ETH = (responseJson[0].price_usd);
		})
	}
	
	ethOK(){
		if (typeof window.web3 === 'undefined'){
			return (
				<h1>Falta el MetaMask</h1>
			)
		}else if (window.web3.eth.coinbase == null){
			return (
				<h1>Activa la cuenta MetaMask</h1>
			)
		}else{
			return this.props.children;
		}
	}

	render() {
		
		return (
			<div className="App">
			    <Link to="/">home</Link>
			    <Link to="/about">about</Link>
			    <Link to="/vender">vender</Link>
				
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">Bienvenido a trueken_ReactJS (Home)</h1>
		        </header>
		        <p className="App-intro">
		        <div class="container-fluid main-container">
					{this.ethOK()}
				</div>
		        </p>
		        <Footer></Footer>
			</div>
		);
	}
}
