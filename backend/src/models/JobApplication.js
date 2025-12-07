export default (sequelize, DataTypes) => {
  return sequelize.define(
    'JobApplication',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cv_filename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cv_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM(
          'new',
          'reviewing',
          'shortlisted',
          'rejected',
          'hired'
        ),
        defaultValue: 'new',
      },
    },
    {
      tableName: 'job_applications',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
};
