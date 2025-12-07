export default (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password_hash: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: 'users',
    }
  );
};
