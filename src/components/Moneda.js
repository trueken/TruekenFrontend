import React from 'react';

export default class Moneda extends React.Component {
	
	render () {
		let price = window.USD4ETH / this.props.token.tokenInfo.price.rate;
		let trueken = 'moneda nueva';
		let info = (
			<p>Puedes ser el primero en ofertar para esta moneda<br/>&nbsp;
			Ten en cuenta que si superas el valor de <b>{this.props.token.tokenInfo.symbol} por ETH</b> 
			serás más competitivo
			</p>);
		if (typeof this.props.token.trades!=='undefined'){
			let diff = 1/this.props.token.trades.avg - price;
			let perc = diff;
			let qcolor = {
				"color": (diff >= 0 ? "green" : "red")
			};
			let q = <span style={qcolor}>{perc}</span>;

			trueken = <div>{1/this.props.token.trades.min} &lt; {1/this.props.token.trades.avg} ({q}) &lt; {1/this.props.token.trades.max}</div>;
			
			let qinfo = null;
			if (diff < 0){
				qinfo = <span>En estos momentos el mercado de Trueken para {this.props.token.tokenInfo.name}
					está siendo bastante menos competitivo que su mercado natural.<br/>
					Te será fácil superarlo siempre que ofrezcas por encima de {price}{this.props.token.tokenInfo.symbol}
					</span>
			}
			
			info = (
				<p>Puedes ofertar para esta moneda<br/>&nbsp;
				Ten en cuenta que si superas el valor de <b>Mercado de Trueken</b> 
				serás más competitivo y podrás vender más rápido tus monedas.<br/>
				{qinfo}
				</p>
			);
		}
		
		
		
		return(
		<div class="">
			<b>Nombre: </b>
			<span>{this.props.token.tokenInfo.name}</span>
			<br/>
			<b>Saldo: </b>
			<span>{this.props.token.balance/10**this.props.token.tokenInfo.decimals}{this.props.token.tokenInfo.symbol}</span>
			<br/>
			<b>Saldo USD: </b>
			<span>{this.props.token.balance/10**this.props.token.tokenInfo.decimals*this.props.token.tokenInfo.price.rate}{this.props.token.tokenInfo.price.currency}</span>
			<br/>
			<b>Precio: </b>
			<span>{1/price}ETH</span>
			<br/>
			<b>Precio USD: </b>
			<span>{this.props.token.tokenInfo.price.rate}{this.props.token.tokenInfo.price.currency}</span>
			<br/>
			<b>{this.props.token.tokenInfo.symbol} por ETH: </b>
			<span>{price}{this.props.token.tokenInfo.symbol}</span>
			<br/>
			<b>Mercado Trueken: </b>
			<span>{trueken}</span>
			{info}
		</div>
		);
	}
}