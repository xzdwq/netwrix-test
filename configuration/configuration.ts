const MODE = process.env.NODE_ENV;

export default (): object => ({
  mode: MODE,
  port: +process.env.PORT,
  database: {
    netwrix: {
      type:     process.env.DB_MS_NETWRIX_TYPE,
      host:     process.env.DB_MS_NETWRIX_HOST,
      port:     +process.env.DB_MS_NETWRIX_PORT,
      username: process.env.DB_MS_NETWRIX_USERNAME,
      password: process.env.DB_MS_NETWRIX_PASSWORD,
      database: process.env.DB_MS_NETWRIX_DB
    }
  }
});