var restify = require('restify');
var server = restify.createServer();
var listenPort = process.env.PORT || 9999;

var surveys = require(__dirname + '/surveys');
var todos = require(__dirname + '/to-investigate');
var codeList = require(__dirname + '/codeList');
var investigated = require(__dirname + '/investigated');

restify.CORS.ALLOW_HEADERS.push('authorization');
restify.CORS.ALLOW_HEADERS.push('Location');

const getSurveyList = idHousehold =>
	todos.filter(t => t.id === idHousehold).reduce((_, t) => {
		const label = surveys.find(s => s.id === t.idSurvey).label;
		const obj = { id: t.idSurvey, label };
		_.push(obj);
		return _;
	}, []);

const getSurvey = idSurvey => surveys.find(s => s.id === idSurvey);

const getTodo = (idHousehold, idSurvey) =>
	todos.find(t => `${t.id}${t.idSurvey}` === `${idHousehold}${idSurvey}`);

const getTodoPosition = data => {
	const { id, idSurvey } = data;
	for (var i = 0; i < todos.length; i++) {
		if (todos[i].id === id && todos[i].idSurvey === idSurvey) {
			return i;
		}
	}
	return -1;
};

server.use(
	restify.CORS({
		headers: ['Location'],
		credentials: true,
	})
);

server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/surveys/:idHousehold', function(req, res, next) {
	var surveyList = getSurveyList(req.params.idHousehold);
	res.send(surveyList);
	next();
});

server.get('/survey/:idSurvey', function(req, res, next) {
	var survey = getSurvey(req.params.idSurvey);
	res.send(survey);
	next();
});

server.get('/todo/:idHousehold/:idSurvey', function(req, res, next) {
	const { idHousehold, idSurvey } = req.params;
	var todo = getTodo(idHousehold, idSurvey);
	res.send(todo);
	next();
});

server.get('/codeList', function(req, res, next) {
	res.send(codeList);
	next();
});

server.post('/survey', function(req, res, next) {
	const data = req.body;
	const { id, idSurvey } = data;
	const position = getTodoPosition(data);
	if (position > -1) {
		todos.splice(position, 1);
	}
	investigated.push(data);
	console.log(investigated);
	res.send(200);
	next();
});

console.log('listening in http://localhost:' + listenPort);

server.listen(listenPort);
