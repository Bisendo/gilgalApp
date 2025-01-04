
module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define("Admins", {
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    });

    // Admins.associate = (Models)  =>{
    //     Admins.hasMany(Models.Posts,{
    //         onDelete:"cascade",
    //     });
    // };
  
    return Admins;
  };
  