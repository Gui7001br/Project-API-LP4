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

// Inserir os dados os dados

bd.query("INSERT INTO usuario (id, nome, email) values (3, 'José', 'jose@gmail.com')",
    (err, result) => {
        if(err) {
            console.log("Erro de inserção");
        } else {
            console.log("Inserção realizada com sucesso");
        }
    }
)

// Atualizar os dados do banco de dados

bd.query("UPDATE usuario SET nome = 'José da Silva' where id = 3",
    (err, result) => {
        if(err) {
            console.log("Erro de atualização");
        } else {
            console.log("Atualização realizada com sucesso");;
            console.log(result.rows);
        }
    }
)