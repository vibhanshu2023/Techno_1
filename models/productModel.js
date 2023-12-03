module.exports = (sequelize, DataTypes) => {

    const Techno = sequelize.define("Techno", {
        Serial_no: {
            type: DataTypes.INTEGER
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        School: {
            type: DataTypes.TEXT
        },
        DOB: {
            type: DataTypes.STRING
        }
    })

    return Techno

}
