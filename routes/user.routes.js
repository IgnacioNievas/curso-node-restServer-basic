const { Router } = require('express');
const {
	userGET,
	userPOST,
	userPUT,
	userPATCH,
	userDELETE,
} = require('../controllers/user.controllers');
const route = Router();

route.get('/', userGET);
route.post('/', userPOST);
route.put('/:id', userPUT);
route.patch('/', userPATCH);
route.delete('/', userDELETE);

module.exports = route;
