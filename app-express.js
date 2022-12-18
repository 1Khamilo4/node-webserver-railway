require('dotenv').config();/**con el paquete 'dotenv' puedo configurar los archivos donde guardo las variables de entorno 
que en este caso es donde guardo la variable de entorno del puerto 'PORT', estos archivos son '.env' y con el metodo .config() es donde ya 
puedo utilizar dichaz variables en mi archivo del controlador que en este caso es el archivo 'app-express.js' */

const express = require("express");
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

//Servir contenido estatico
//Middleware
app.use(express.static(__dirname +'/public'));/**Las carpetas o archivos que se encuentren en public se ejecutan a la par con la url si ambos 
tienen el mismo nombre ejem: si la carpeta que maneja el html de la ruta '/hola-mundo' tiene el mismo nombre  */



app.get('/',(req,res)=>{/**Controlador de la url */

    res.render('home',{/**Mandamos informacion desde nuestro controlador (que en este caso es un objeto literal) a la vista y alli los podemos 
    manipular como si fueran propiedades con valores (ejem: en la vita se manipulan asi <h1>{{nombre}}</h1>) */
        nombre: 'Camilo',
        titulo:'Curso de Node'
    });
}); 
 
app.get('/generic',(req,res)=>{
    res.render('generic');
});

app.get('/elements',(req,res)=>{
    res.render('elements')
})

app.get('/hola-mundo', (req,res)=>{
    
});
 

/* app.get('/generic',(req,res)=>{
    res.sendFile(__dirname+'/public/generic.html')
});

app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})


app.get('*', (req,res)=>{
    res.sendFile(__dirname+"/public/404.html")
});
 */


app.listen(port, ()=>{
    console.log(`Example app listening in port http://localhost:${port}`);
})