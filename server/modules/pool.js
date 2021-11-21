const pg = require('pg');
const Pool = pg.Pool;
const config = {
    host: 'Localhost', // Location of database
    database: 'weekend-to-do-app'  // Name of database
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('server-database connection happened.');
});

pool.on('error', (poolError) => {
    console.error(poolError);
});

/* export pool object so it can be used 
elsewhere for database connection */
module.exports = pool;