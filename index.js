const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) =>{
    resposta.send("Ola MUNDO")
})

app.listen(3000, () => {
    console.log("funfou")
})