const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')


const app = express()
const port = 5000


//Import controller
const menuController = require('./controllers/menuController')
const orderController = require('./controllers/orderController')
const categoriController = require('./controllers/categoriController')   

app.group("/api/v1", (router) => {

    //categori
    router.get('/categoris', categoriController.index)
    router.get('/categori/:id', categoriController.show)
    router.post('/categori/:id', categoriController.store)
    router.patch('/categori/:id', categoriController.patch)
    router.delete('/categori/:id', categoriController.delete)


    //menu
    router.get('/menus', menuController.index)
    router.get('/menu/:id', menuController.show)
    router.post('/menu/:id', menuController.store)
    router.patch('/menu/:id', menuController.patch)
    router.delete('/menu/:id', menuController.delete)


    //order
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.post('/order/:id', orderController.store)
    router.patch('/order/:id', orderController.patch)
    router.delete('/order/:id', orderController.delete)

})

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))