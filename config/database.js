import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "new_password",
  database: "odisha360",
});

const connectDB = async () => {
  return pool;
};

export default connectDB;
