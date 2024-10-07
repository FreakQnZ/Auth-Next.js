import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
    connectionString: "postgres://default:92kYcTRFZVpS@ep-holy-firefly-a1ozh2x5-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
})

export default pool;
