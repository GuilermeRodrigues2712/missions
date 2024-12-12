import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Mission extends Model {
  public id!: number;
  public name!: string;
  public targetPlanet!: string;
  public durationYears!: number;
  public crewSize!: number;
  public technologies!: string[];
}

Mission.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetPlanet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  durationYears: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  crewSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Mission',
});

export default Mission;