module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define("Events", {
        title: {
            type: DataTypes.STRING,
            allowNull: false, // The event must have a title
        },
        description: {
            type: DataTypes.TEXT, // Use TEXT for detailed event descriptions
            allowNull: false, // The event must have a description
        },
        date: {
            type: DataTypes.DATE, // Store the date and time of the event
            allowNull: false, // The event must have a date
        },
        image: {
            type: DataTypes.STRING, // Path or URL for the event image
            allowNull: true, // Optional, can be null if no image is provided
        },
        location: {
            type: DataTypes.STRING, // Location of the event
            allowNull: true, // Optional, can be null if not specified
        },
    });

    return Events;
};
