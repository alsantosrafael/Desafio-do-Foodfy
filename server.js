//iniciando nosso servidor

//criando variável para acessar o express

const express = require('express')
const nunjucks = require('nunjucks') // Chamando nunjucks
const server = express() //executando o express


/*Chamando array que contém meus projetos nos cards*/
const items = require("./data")
const { query } = require('express')

server.use(express.static('public')) //Requerendo nosso css na pasta public

server.set("view engine", "njk")

nunjucks.configure("views", { //configurando o nunjucks, primeiro colocamos a pasta views, onde está o documento, e a opção express:server
    express: server,
    autoescape: false, // Função responsável por manter links html a disposição no nunjucks
    noCache: true
})

//criando rotas para as páginas do meu site
server.get("/", function(req, res){
    return res.render("index", { recipes : items }) //Além de renderizar a página aqui, 
    //também chamei o array que criei lá em cima para haver acesso aos dados
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas", { recipes : items })//Mesmo esquema aqui 
})

//Criando rota da página receita
server.get("/:index", function (req, res) {
    
     const recipeIndex = req.params.index
     const recipe = items[recipeIndex]

     return res.render("receita", {recipe})
 })

server.listen(5000, function(){
    console.log('Server is now running!')
})