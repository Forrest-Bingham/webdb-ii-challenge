const server = require('./server.js');

const carsRouter = require('./data/carsRouter.js');

const PORT = process.env.PORT || 5000;

server.use('/api/cars', carsRouter);

server.get('/', (req,res) => {
    res.json({
        Assignment: "Cars KNEX file n stuff"
    })
})

server.listen(PORT, () => {
    console.log(`************ Listening on http//localhost:${PORT} ********`)
})