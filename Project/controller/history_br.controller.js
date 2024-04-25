const query = require('../db')
  
class History_brController {

  async createHistory_br (req,res) {
      const {location_id,inventory_code,name,history_br_class,subclass} = req.body
      const newHistory_br = await query (
        'INSERT INTO history_br (location_id,inventory_code,name,history_br_class,subclass) values ($1,$2,$3,$4,$5) RETURNING *',
        [location_id,inventory_code,name,history_br_class,subclass]
    );
      res.json(newHistory_br.rows[0]) 
  }

  async getHistory_br(req,res) {
    const history_br = await query('SELECT * FROM history_br ')
    res.json(history_br.rows);
  }

  async getOneHistory_br(req,res) {
    const history_br_id = req.params.history_br_id
    const history_br = await query('SELECT * FROM history_br where history_br_id = $1' , [history_br_id])
    res.json(history_br.rows[0])
  }

  async updateHistory_br(req, res) {
    const {location_id,inventory_code,name,history_br_class,subclass, history_br_id} = req.body;
    const history_br = await query(
        'UPDATE history_br SET location_id = $1, inventory_code = $2, name = $3, history_br_class = $4 ,subclass = $5 where history_br_id = $6  RETURNING *',
        [location_id, inventory_code,name,history_br_class,subclass, history_br_id]
    );
    res.json(history_br.rows[0]);
}

  async deleteHistory_br(req,res) {
    const history_br_id = req.params.history_br_id
    const history_br = await query('DELETE FROM history_br where history_br_id = $1' , [history_br_id])
    res.json(history_br.rows[0])
  }
}

module.exports = new History_brController()