const query = require("../db");

class LocationController {
  async createLocation(req, res) {
    const { floor, room } = req.body;
    const newLocation = await query(
      "INSERT INTO location (floor, room) values ($1,$2) RETURNING *",
      [floor, room],
    );
    res.json(newLocation.rows[0]);
  }

  async getLocationById(req, res) {
    const location_id = req.query.id;
    const location = await query(
      "SELECT * FROM location where location_id= $1",
      [location_id],
    );
    res.json(location.rows);
  }
}

module.exports = new LocationController();
