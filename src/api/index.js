const baseHost = 'http://localhost:9999';

const surveyList = 'surveys';
const survey = 'survey';
const todo = 'todo';
const codeList = 'codeList';

// function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// export async function getSurveyList(idHousehold) {
// 	await sleep(2000);
// 	return fetch(`${baseHost}/${surveyList}/${idHousehold}`, {
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	}).then(res => res.json());
// }
export const getSurveyList = idHousehold => {
	return fetch(`${baseHost}/${surveyList}/${idHousehold}`, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());
};

export const getSurvey = idSurvey =>
	fetch(`${baseHost}/${survey}/${idSurvey}`, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());

export const getTodo = (idHousehold, idSurvey) =>
	fetch(`${baseHost}/${todo}/${idHousehold}/${idSurvey}`, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());

export const getCodeList = () =>
	fetch(`${baseHost}/${codeList}`, {
		headers: {
			Accept: 'application/json',
		},
	}).then(res => res.json());

export const postSurvey = survey =>
	fetch(`${baseHost}/survey`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(survey),
	}).then(res => {
		if (res.ok) return res;
		throw new Error(`Network request failed :${res.statusText}`);
	});
