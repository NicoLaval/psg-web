import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Home from './home';
import SurveyContainer from './survey/container';
import SurveyListContainer from './survey-list/container';

export default class Root extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route
							exact
							path="/surveys/:idHousehold"
							component={SurveyListContainer}
						/>
						<Route
							exact
							path="/survey/:idSurvey/:idHousehold"
							component={SurveyContainer}
						/>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}
