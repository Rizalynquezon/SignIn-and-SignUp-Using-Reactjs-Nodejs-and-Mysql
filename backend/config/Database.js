import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'Rizqas31415926', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
 