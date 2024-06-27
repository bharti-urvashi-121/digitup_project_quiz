import  Sequelize  from "sequelize";
import { DataTypes } from "sequelize";

const sequelize = new Sequelize(
 'Quiz',
 'postgres',
 'Postgress',
 {
    host: 'localhost',
    dialect: 'postgres'
 }

);

sequelize.authenticate().then(()=>{
console.log('Connecetd');
}).catch((error)=>{
    console.error('Unable to connect',error)
});

const Quiz = sequelize.define('Quiz',{
   question:{
      type: DataTypes.STRING,
      allowNull:false
   },
   option_a:{
      type: DataTypes.STRING,
      allowNull:false
   },
   option_b:{
      type: DataTypes.STRING,
      allowNull:false
   },
   option_c:{
      type: DataTypes.STRING,
      allowNull:false
   },
   option_d:{
      type: DataTypes.STRING,
      allowNull:false
   },
   correct_answer:{
      type: DataTypes.ENUM,
      values:['option_a','option_b','option_c','option_d'],
      allowNull:false
   },
})

sequelize.sync().then(()=>{
    console.log('Table created ');
}).catch((error)=>{
    console.error('Unable to connect', error)
});

export default Quiz;