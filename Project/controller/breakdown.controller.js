const db = require('../db')

class BreakdownController{

    async createBreakdown (req,res){
        const{
            description,
            location ,
            date_reported ,
            status ,
            equipment ,
            technical_assigned, breakdown_id
            }= req.body
        const newBreakdown = await db.query('INSERT INTO breakdown (description, location,date_reported, status, equipment , technical_assigned, breakdown_id) values ($1, $2, $3, $4, $5,$6, $7) RETURNING *', [description, location,date_reported, status, equipment , technical_assigned, breakdown_id])
        res.json(newBreakdown.rows[0])
    }

    async getBreakdownsByPerson (req,res){
        const breakdown_id = req.query.id
        const breakdowns = await db.query('SELECT * FROM breakdown where breakdown_id= $1', [breakdown_id])
        res.json(breakdowns.rows)
    }
    //для свого переробити та пропестить с 16 мин примерно
}

module.exports = new BreakdownController()