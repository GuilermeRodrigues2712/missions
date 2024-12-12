import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import bcrypt from 'bcrypt';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public static hashPassword(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  public static validatePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: (user: User) => {
      user.password = User.hashPassword(user.password);
    },
  },
});

export default User;