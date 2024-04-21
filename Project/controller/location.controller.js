const query = require('../db')

class LocationController{

    async createLocation (req,res){
        const{ floor }= req.body
        const newLocation = await query('INSERT INTO location (floor) values ($1) RETURNING *', [floor])
        res.json(newLocation.rows[0])
    }

    async getLocationById (req,res){
        const location_id = req.query.id
        const location = await query('SELECT * FROM location where location_id= $1', [location_id])
        res.json(location.rows)
    }
    //для свого переробити та проtестить с 16 мин примерно
}

module.exports = new LocationController()