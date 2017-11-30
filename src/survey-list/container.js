import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import SurveyList from './';
import { getSurveyList } from '../api';
import '../app.css';

class SurveyListContainer extends Component {
	componentDidMount() {
		const { idHousehold } = this.props.match.params;
		getSurveyList(idHousehold).then(list => this.setState({ list }));
	}

	render() {
		const idHousehold = this.props.match.params.idHousehold;

		if (this.state) {
			return <SurveyList idHousehold={idHousehold} list={this.state.list} />;
		}
		return (
			<CircularProgress
				size={300}
				thickness={15}
				color="ee3467"
				className="circularProgress"
			/>
		);
	}
}

export default SurveyListContainer;
