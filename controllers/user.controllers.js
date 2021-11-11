const userGET = (req, res) => {
	const { v, apikey, limit, page = null } = req.query;
	res.json({ msg: 'get api- of controllers', v, apikey, limit, page });
};

const userPOST = (req, res) => {
	const { nombre, apellido, edad } = req.body;
	res.json({ msg: 'post api- of controllers', nombre, apellido, edad });
};

const userPUT = (req, res) => {
	const { id } = req.params;
	res.json({ msg: 'put api- of controllers', id });
};

const userPATCH = (req, res) => {
	res.json({ msg: 'patch api- of controllers' });
};

const userDELETE = (req, res) => {
	res.json({ msg: 'delete api- of controllers' });
};

module.exports = {
	userGET,
	userPOST,
	userPUT,
	userPATCH,
	userDELETE,
};
