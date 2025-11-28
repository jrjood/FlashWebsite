export default (sequelize, DataTypes) => {
  return sequelize.define(
    'Project',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: { type: DataTypes.STRING, allowNull: false, unique: true },
      type: { type: DataTypes.STRING, allowNull: true },
      developer: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.TEXT, allowNull: true },
      area: { type: DataTypes.TEXT, allowNull: true },
      coverImage: { type: DataTypes.STRING, allowNull: true },
      isFeatured: { type: DataTypes.BOOLEAN, defaultValue: false, index: true },
      publishedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'projects',
      indexes: [
        { fields: ['title'], unique: true },
        { fields: ['isFeatured'] },
      ],
    }
  );
};
