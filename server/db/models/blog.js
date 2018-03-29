'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.INTEGER,
      // references: "author",
      // referencesKey: 'id'
    }
  }, {
      classMethods: {
        associate: function (models) {
          Blog.belongsTo(models.Author, {
            as: 'author',
            foreignKey: "authorId",
            targetKey: 'id',
            // foreignKeyConstraint: true
          }
          )
        }
      }
    }
  )

          

      

    


return Blog;
};