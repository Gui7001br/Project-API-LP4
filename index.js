// Acessar o banco de dados que está no postgres(PGAdmin).

const Pool = require('pg').Pool
const bd = new Pool({
    user: 'postgres',
    password: 'ifms',
    host: 'localhost',
    port: '5432',
    database: 'LP4',
})

// Criar conexão 

bd.connect((err) => {
    if(err) {
        console.log('Erro de conexão');
    } else {
        console.log('Conectado');
    }
});


// Consultar

 bd.query('Select * from usuario', 
 (err, result) => {
     if(err) {
         console.log('Erro de consulta');
     } else {
         console.log(result.rows);
     }
 });
