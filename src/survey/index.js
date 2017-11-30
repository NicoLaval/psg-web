import React from 'react';
import Title from '../shared/title';
import { GeneratedSurvey } from 'generated-survey';

function Survey({ todo, survey, codeList, onClickBack, onClickSave }) {
	return (
		<div className="mui-container">
			<Title title={`${survey.label}`} />
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
