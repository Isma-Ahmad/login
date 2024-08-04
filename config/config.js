module.exports = {
    development: {
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'test',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
    },
  };
  