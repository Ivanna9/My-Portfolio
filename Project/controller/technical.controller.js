const query = require('../db')
  
class TechnicalController {

  //POST + body
  async createTechnical (req,res) {
      const {location_id,code ,inventory_code,name,technical_class,subclass} = req.body
      const newTechnical = await query (
        'INSERT INTO technical (location_id,code ,inventory_code,name,technical_class,subclass) values ($1,$2,$3,$4,$5,$6) RETURNING *',
        [location_id,code,inventory_code,name,technical_class,subclass]
    );
      res.json(newTechnical.rows[0]) 
  }

  //
  async getTechnical(req,res) {
    const technical = await query('SELECT * FROM technical ')
    res.json(technical.rows);
  }

  //тут замісто technical_id (бо має UUID) буде code метод , GET - body + code
  async getOneTechnical (req,res) {
    let code = req.params.code
    code = await query('SELECT * FROM technical where code = $1' , [code])
    res.json(code.rows[0])
  }
// PUT + body + id in postman
  async updateTechnical(req, res) {
    const {location_id,code,inventory_code,name,technical_class,subclass, technical_id} = req.body;
    const technical = await query(
        'UPDATE technical SET location_id = $1,code=$2 , inventory_code = $3, name = $4, technical_class = $5 ,subclass = $6 where technical_id = $7  RETURNING *',
        [location_id,code, inventory_code,name,technical_class,subclass, technical_id]
    );
    res.json(technical.rows[0]);
}

//DELETE -body + technical_id
  async deleteTechnical (req,res) {
    const technical_id = req.params.technical_id
    const technical = await query('DELETE FROM technical where technical_id = $1' , [technical_id])
    res.json(technical.rows[0])
  }
}

module.exports = new TechnicalController()