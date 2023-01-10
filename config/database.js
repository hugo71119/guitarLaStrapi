module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdq03ag2i3mjaloggt00-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_q6k2'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'eVlhTGgQm9VYi0RTXMTGaFbApgViqos4'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
