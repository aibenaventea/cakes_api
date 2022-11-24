module.exports = (app) => {
    const express = require('express')

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    const cakesController = require('../controllers/cakes')

    app.get('/getAll', (res,req) => {
        cakesController.getAll(res,req);
    });
    app.get('/getById/:id', (res,req) => {
        cakesController.getById(res,req);
    });
    app.post('/createNew', (res,req) => {
        cakesController.createNew(res,req);
    });
    app.put('/update/:id', (res,req) => {
        cakesController.update(res,req);
    });
    app.delete('/delete/:id', (res,req) => {
        cakesController.delete(res,req);
    });
}