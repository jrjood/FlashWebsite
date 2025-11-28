import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
import UserModel from './User.js';
import ProjectModel from './Project.js';
import ProjectMediaModel from './ProjectMedia.js';
import PostModel from './Post.js';

const User = UserModel(sequelize, DataTypes);
const Project = ProjectModel(sequelize, DataTypes);
const ProjectMedia = ProjectMediaModel(sequelize, DataTypes);
const Post = PostModel(sequelize, DataTypes);

Project.hasMany(ProjectMedia, {
  as: 'media',
  foreignKey: 'projectId',
  onDelete: 'CASCADE',
});
ProjectMedia.belongsTo(Project, { foreignKey: 'projectId' });

export { sequelize, User, Project, ProjectMedia, Post };
