module.exports = (sequelize, DataTypes) => {
  return sequelize.define('sensor', {
    temperature: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fine_dust: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gps: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    recorddate: {
      type: 'TIMESTAMP',
      allowNull: false,
    },
    machine_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    machine_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'sensor',
  });
};
