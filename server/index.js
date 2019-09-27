//console.log("hola server")

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors()) 
app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {

    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)

    let result

    switch (req.params.selectedOperator)
    {
        case "+":
            resultValue = firstValue + secondValue;
        break;
        case "-":
            resultValue = firstValue - secondValue;
        break;
        case "/":
            resultValue = firstValue / secondValue;
        break;
        case "*":
            resultValue = firstValue * secondValue;
        break;
        default:
            display.innerText = "Error";
        break;
        }
    
    res.send({label:'Hello World'})
})
 
app.listen(3000, () => {
    console.log ("Servidor corriendo en el puerto 3000")
})


