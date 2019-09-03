const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')


const app = express()
const port = 5000

app.use(bodyParser.json())


//Import transactionontroller master
const menuController = require('./controllers/menuController')
const orderController = require('./controllers/orderController')
const categoriController = require('./controllers/categoriController')  
const transactionController = require('./controllers/transactionController')  


//Import Controller 
const categoriMenController = require('./controllers/categoriMenController')
const orderTransController = require('./controllers/orderTransController')
const transOrderController = require('./controllers/transOrderController')

app.group("/api/v1", (router) => {

    //categori
    router.get('/categoris', categoriController.index)
    router.get('/categori/:id', categoriController.show)
    router.post('/categori', categoriController.store)
    router.patch('/categori/:id', categoriController.patch)
    router.delete('/categori/:id', categoriController.delete)

    //menu Cate
    router.get('/categori/menu/:categoriId',categoriMenController.show);


    //menu
    router.get('/menus', menuController.index)
    router.get('/menu/:id', menuController.show)
    router.post('/menu', menuController.store)
    router.patch('/menu/:id', menuController.patch)
    router.delete('/menu/:id', menuController.delete)


    //order
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.post('/order', orderController.store)
    router.patch('/order/:id', orderController.patch)
    router.delete('/order/:id', orderController.delete)

    //jml Order
    router.get('/order/transactionId/:transactionId/menuId/:menuId',orderTransController.show);


    //transaction
    router.get('/transaction', transactionController.index)
    router.get('/transaction/:id', transactionController.show)
    router.post('/transaction', transactionController.store)
    router.patch('/transaction/:id', transactionController.patch)
    router.delete('/transaction/:id', transactionController.delete)

    //transall
    router.get('/transactionOrder/:id',transOrderController.show);

})

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))