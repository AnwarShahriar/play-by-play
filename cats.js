var _ = require('lodash');

module.exports = function (app) {
	_cats = [];

	/* Create */
	app.post('/cat', function (req, res) {
		_cats.push(req.body);
		res.json({info: 'cat created successfully'});
	});

	/* Read */
	app.get('/cat', function (req, res) {
		res.send(_cats);
	});

	app.get('/cat/:id', function (req, res) {
		res.send(
			_.find(
				_cats, 
				{
					name: req.params.id
				}
			)
		);
	});
};