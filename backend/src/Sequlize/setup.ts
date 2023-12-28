import {sequelize} from './index';

async function Setup() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{ username: 'jack-sparrow' },
		{ username: 'white-beard' },
		{ username: 'black-beard' },
		{ username: 'brown-beard' },
	]);
}

Setup().then(() => console.log('Done!'))