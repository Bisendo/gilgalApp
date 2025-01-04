module.exports = (sequelize, DataTypes) => {
    const Ministries = sequelize.define("Ministries", {
        image: {
            type: DataTypes.STRING, // Path or URL for the image
            allowNull: true, // Optional, can be null if no image is provided
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT, // Use TEXT for detailed descriptions
            allowNull: false,
        },
        
    });
    return Ministries;
};
