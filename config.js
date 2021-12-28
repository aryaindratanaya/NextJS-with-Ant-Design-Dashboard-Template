const base = {
  COOKIE_NAME: 'nextjs-with-ant-design-dashboard-template',
  API_HOST: 'http://localhost:8000/',
  DB_HOST: 'http://localhost:3306/',
}

const production = {
  ...base,
  API_HOST: process.env.API_HOST,
  DB_HOST: process.env.DB_HOST,
}

const env = process.env.STAGE || 'development'

export default env === 'production' ? production : base
