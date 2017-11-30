import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Survey from './';
import CircularProgress from 'material-ui/CircularProgress';
import { getSurvey, getCodeList, getTodo, postSurvey } from '../api';

class SurveyContainer extends Component {
	constructor(props) {
		super();
		this.state = {};
		const { idHousehold } = props.match.params;
		this.onClickBack = () =>
			this.setState({ redirect: `/surveys/${idHousehold}` });
		this.onClickSave = data => postSurvey(data).then(res => console.log(res));
	}

	componentDidMount() {
		const { idSurvey, idHousehold } = this.props.match.params;
		getSurvey(idSurvey).then(survey => this.setState({ survey }));
		getTodo(idHousehold, idSurvey).then(todo => this.setState({ todo }));
		getCodeList().then(codeList => this.setState({ codeList }));
	}

	render() {
		const { redirect, survey, codeList, todo } = this.state;

		if (redirect) return <Redirect to={redirect} />;

		if (survey && codeList && todo) {
			return (
				<Survey
					todo={todo}
					survey={survey}
					codeList={codeList}
					onClickBack={this.onClickBack}
					onClickSave={this.onClickSave}
				/>
			);
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

export default SurveyContainer;
