const query = require('../db')
  
class TechnicalController {

  async createTechnical (req,res) {
      const {location_id,inventory_code,name,technical_class,subclass} = req.body
      const newTechnical = await query (
        'INSERT INTO technical (location_id,inventory_code,name,technical_class,subclass) values ($1,$2,$3,$4,$5) RETURNING *',
        [location_id,inventory_code,name,technical_class,subclass]
    );
      res.json(newTechnical.rows[0]) 
  }

  async getTechnical(req,res) {
    const technical = await query('SELECT * FROM technical ')
    res.json(technical.rows);
  }

  async getOneTechnical (req,res) {
    const technical_id = req.params.technical_id
    const technical = await query('SELECT * FROM technical where technical_id = $1' , [technical_id])
    res.json(technical.rows[0])
  }

  async updateTechnical(req, res) {
    const {location_id,inventory_code,name,technical_class,subclass, technical_id} = req.body;
    const technical = await query(
        'UPDATE technical SET location_id = $1, inventory_code = $2, name = $3, technical_class = $4 ,subclass = $5 where technical_id = $6  RETURNING *',
        [location_id, inventory_code,name,technical_class,subclass, technical_id]
    );
    res.json(technical.rows[0]);
}

  async deleteTechnical (req,res) {
    const technical_id = req.params.technical_id
    const technical = await query('DELETE FROM technical where technical_id = $1' , [technical_id])
    res.json(technical.rows[0])
  }
}

module.exports = new TechnicalController()