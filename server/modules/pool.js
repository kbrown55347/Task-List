const pg = require('pg');
const Pool = pg.Pool;
const config = {
    host: 'Localhost', // Location of our database.
    database: 'weekend-to-do-app'  // Name of our database.
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('server-database connection happened.');
});

pool.on('error', (poolError) => {
    console.error(poolError);
});

// export pool object so we can use it for database 
// connection elsewhere (i.e. server.js file)
module.exports = pool;