import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://username:password@hostname:port/database');

export default sequelize;