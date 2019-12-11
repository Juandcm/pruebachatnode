'use strict';

const mysql = require('mysql');
const config = require('config');

class Db {
	constructor() {
		this.connection = mysql.createPool({
			connectionLimit: 100,
			host: 'sql10.freemysqlhosting.net',
			user: 'sql10315269',
			password: '31BDhi45P2',
			database: 'sql10315269',
			debug: false
		});
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err)
					return reject(err);
				resolve(rows);
			});
		});
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err);
				resolve();
			});
		});
	}
}
module.exports = new Db();
