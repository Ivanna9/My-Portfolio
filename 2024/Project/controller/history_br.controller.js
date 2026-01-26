const query = require("../db");

class History_brController {
  async createHistory_br(req, res) {
    const { person_id, technical_id, description, date, status } = req.body;
    const newHistory_br = await query(
      "INSERT INTO history_br (person_id,technical_id,description,date,status) values ($1,$2,$3,$4,$5) RETURNING *",
      [person_id, technical_id, description, date, status],
    );
    res.json(newHistory_br.rows[0]);
  }

  async getHistory_br(req, res) {
    const history_br = await query("SELECT * FROM history_br ");
    res.json(history_br.rows);
  }

  async getOneHistory_br(req, res) {
    const history_br_id = req.params.history_br_id;
    const history_br = await query(
      "SELECT * FROM history_br where history_br_id = $1",
      [history_br_id],
    );
    res.json(history_br.rows[0]);
  }

  async updateHistory_br(req, res) {
    const {
      person_id,
      technical_id,
      description,
      date,
      status,
      history_br_id,
    } = req.body;
    const history_br = await query(
      "UPDATE history_br SET person_id = $1, technical_id = $2, description = $3, date = $4 ,status = $5 where history_br_id = $6  RETURNING *",
      [person_id, technical_id, description, date, status, history_br_id],
    );
    res.json(history_br.rows[0]);
  }

  async deleteHistory_br(req, res) {
    const history_br_id = req.params.history_br_id;
    const history_br = await query(
      "DELETE FROM history_br where history_br_id = $1",
      [history_br_id],
    );
    res.json(history_br.rows[0]);
  }
}

module.exports = new History_brController();
