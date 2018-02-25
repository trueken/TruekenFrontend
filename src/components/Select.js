import React from 'react';

export default class Select extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			options : [],
			errors: []
		}
		
	}
	
	addError(error){
		this.state.errors.push(error);
	}
	
	render(extra) {
		if (this.state.errors.length>0){
			return <span class="error">{this.state.errors[0]}</span>
		}
        return(
        	<div>
        	<select id={this.props.id} name={this.props.name} onChange={this.state.onChange}>
        		{this.state.options}
        	</select>
        	{extra}
        	</div>);
        
    }
}