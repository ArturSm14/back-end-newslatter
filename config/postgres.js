import pg from 'pg';

const poll = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'newsletter',
    password: '',
    port: 5432,
});

export default {
    query: (text, params) => poll.query(text, params)
};