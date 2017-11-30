import React, { Component } from 'react';
import Title from '../shared/title';
import Input from '../input';
import Button from '../button/login';
import '../app.css';

class home extends Component {
	constructor() {
		super();
		this.state = { id: '' };
		this.handleChange = id => this.setState({ id });
	}
	render() {
		const { id } = this.state;
		return (
			<div className="mui-container">
				<Title title={'Welcome to PSG-web'} />
				<div className="mui-row">
					<Input
						id={'user'}
						label={'Veuillez saisir votre identifiant :'}
						value={id}
						onChange={this.handleChange}
						col={12}
					/>
				</div>
				<div className="mui-row">
					<Button id={id} />
				</div>
			</div>
		);
	}
}

export default home;
