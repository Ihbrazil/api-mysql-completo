// conexão com mysql
import mysql from   "mysql2/promise";

const pool = mysql.createPool({
    host    : 'localhost',
    user    : 'novousuario',
    password: 'novasenha',
    database: 'libertadoresdb',
});

export default pool;
// conexão com mysql

