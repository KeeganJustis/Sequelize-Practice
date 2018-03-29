'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },


    {
      classMethods: {
        associate: function (models) {
          Author.hasMany(models.Blog, {
            as: 'blogs',
            foreignKey: 'authorId',
            sourceKey: 'id',
            // foreignKeyConstraint: true
          })
        }
      }
    });

 
  return Author;
};