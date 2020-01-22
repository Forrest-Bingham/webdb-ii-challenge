const express = require('express');

const db = require('./dbConfig.js');

const router = express.Router();

router.get('/', (req,res) => {
    db('cars')
    .then(car => {
        res.json(car);
    })
    .catch( error => {
        console.log(error);
        res.status(500).json({
            error: "Unable to load cars data"
        })
    })
})

router.post('/', (req,res) => {
    const body = req.body;

    if(body){
        if(body.VIN && typeof body.VIN == "number" && body.Make && typeof body.Make == "string" && body.Model && typeof body.Model == "string" && body.Mileage && typeof body.Mileage == "number")
        {
            db('cars').insert(body)
            .then( car => {
                res.status(200).json(car);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: "Unable to add car"
                })
            })
        }
        else {
            console.log(body.VIN, body.Make, body.Model, body.Mileage);
            console.log(typeof body.VIN)
            console.log(typeof body.Make)
            console.log(typeof body.Model)
            console.log(typeof body.Mileage)
            res.status(400).json({
                error: "Please include all the information to create a car"
            })
        }
    } else {
        res.status(400).json({
            error: "Missing information to create car"
        })
    }
})


module.exports = router;