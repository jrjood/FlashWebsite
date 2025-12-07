export default (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING, allowNull: false, unique: true },
      excerpt: { type: DataTypes.STRING, allowNull: true },
      content: { type: DataTypes.TEXT('long'), allowNull: true },
      sections: { type: DataTypes.JSON, allowNull: true },
      coverImage: { type: DataTypes.STRING, allowNull: true },
      tags: { type: DataTypes.STRING, allowNull: true },
      author: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Admin',
      },
      publishedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'posts',
      indexes: [{ fields: ['slug'], unique: true }],
    }
  );
};
