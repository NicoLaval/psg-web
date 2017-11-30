import React from 'react';
import Title from '../shared/title';
import { GeneratedSurvey } from 'generated-survey';

function Survey({ todo, survey, codeList, onClickBack, onClickSave }) {
	const { number, street, postalCode, city } = todo.adress;
	const adressLabel = `Adresse du ménage : ${number} ${street} - ${postalCode} - ${city}`;
	return (
		<div className="mui-container">
			<Title title={`${survey.label}`} />
			<div className="mui-row">
				<h4 className="mui-col-md-12 centered">{adressLabel}</h4>
			</div>
			<div className="mui-row">
				<GeneratedSurvey
					todo={todo}
					survey={survey}
					codeList={codeList}
					onClickBack={onClickBack}
					onClicksave={onClickSave}
					onClickCloseModal={onClickBack}
				/>
			</div>
		</div>
	);
}

export default Survey;
