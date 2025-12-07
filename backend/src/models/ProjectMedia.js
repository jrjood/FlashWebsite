export default (sequelize, DataTypes) => {
  return sequelize.define(
    'ProjectMedia',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      projectId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
      type: { type: DataTypes.ENUM('image', 'video'), allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: 'project_media',
    }
  );
};
