const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "diplom_postgres",
});

const query = async (q, params) => {
  try {
    const results = await pool.query(q, params); // передаем массив параметров вторым аргументом
    return results;
  } catch (error) {
    console.error("Передивись код, шось невірно:", error);
    throw error;
  }
};

module.exports = query;
