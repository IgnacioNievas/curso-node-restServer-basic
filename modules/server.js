const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.userPath = '/api/user';
		this.middleware();
		this.routers();
	}

	middleware() {
		// los middleware siempre se usan los use
		//directorio publico
		this.app.use('/', express.static('public'));
		//cors
		this.app.use(cors());
		//lectura y parse del body
		this.app.use(express.json());
	}

	routers() {
		this.app.use(this.userPath, require('../routes/user.routes'));
	}

	listens() {
		this.app.listen(this.port, () => {
			console.log(`escuchando desde el puerto localhost:${this.port}`);
		});
	}
}

module.exports = Server;
