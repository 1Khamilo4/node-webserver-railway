const http = require("http");

http.createServer( (req,res)=>{

    console.log(req);

    //res.writeHead(200, {'Conten-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})
    
    res.write('id, nombre\n');
    res.write('1, Peggy\n');
    res.write('2, Pavo\n');
    res.write('3, Milu\n');
    res.write('4, Landy\n');

    /*const persona={//Objeto literal 
        id: 1,
        nombre : "Pavo"
    }*/

    //res.write(JSON.stringify(persona) )

    res.end();

})
.listen(8080);

console.log('Escuchando en el puerto 8080');