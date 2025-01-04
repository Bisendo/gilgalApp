module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define("Services", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, // Allow null if no image is provided
    },
  });

  return Services;
};
