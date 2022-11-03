module.exports ={
    port: process.env.PORT || 5432,
    db: {
        database: process.env.DB_NAME || 'ecommerce',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB.PASS || '',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost'
        }
    }
}