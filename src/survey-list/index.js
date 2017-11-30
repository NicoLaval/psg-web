import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../shared/title';
import Button from '../button/eject';

function SurveyList({ idHousehold, list }) {
	var jsx;
	if (list.length)
		jsx = list.map(l => (
			<Link to={`/survey/${l.id}/${idHousehold}`} key={l.id}>
				<li>{l.label}</li>
			</Link>
		));
	else jsx = 'Aucune enquête à saisir';

	return (
		<div className="mui-container">
			<Title title={'Enquêtes en cours'} />
			<div className="mui-row">
				<Button path={'/'} />
			</div>
			<div className="mui-row survey-list centered">{jsx}</div>
		</div>
	);
}

export default SurveyList;
