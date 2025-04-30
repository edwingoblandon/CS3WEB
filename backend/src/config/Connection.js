import sql from 'mssql'
import dontenv from 'dotenv'
dontenv.config()

const stringConection = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    options : {
        trustServerCertificate : true
    }
};
const getConnection = new sql.ConnectionPool(stringConection)
.connect()
.then(pool => {
    console.log('Conectado')
    return pool
})
.catch(error => console.log('Error: ',error))

export {sql, getConnection}

