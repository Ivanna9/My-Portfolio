  const query = require('../db')
  
  class PersonController {
  
    async createPerson (req,res) {
        const {person_name,password,person_role,department,active,email,phone_number,location_id} = req.body
        const newPerson = await query (
          'INSERT INTO person (person_name,password,person_role,department,active,email, phone_number, location_id) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
          [person_name,password,person_role,department,active,email,phone_number,location_id]
      );
        res.json(newPerson.rows[0]) 
    }

    async getPerson(req,res) {
      const person = await query('SELECT * FROM person ')
      res.json(person.rows);
    }

    async getOnePerson (req,res) {
      const person_id = req.params.person_id
      const person = await query('SELECT * FROM person where person_id = $1' , [person_id])
      res.json(person.rows[0])
    }

    async updatePerson(req, res) {
      const { person_id, person_name, password, person_role, department, date_registered, active, email, phone_number,location_id } = req.body;
      const person = await query(
          'UPDATE person SET person_name = $1, password = $2, person_role = $3, department = $4, date_registered = $5, active = $6, email = $7, phone_number = $8 ,location_id = $9 where person_id = $10  RETURNING *',
          [person_name, password, person_role, department, date_registered, active, email, phone_number, location_id,person_id]
      );
      res.json(person.rows[0]);
  }
  
    async deletePerson (req,res) {
      const person_id = req.params.person_id
      const person = await query('DELETE FROM person where person_id = $1' , [person_id])
      res.json(person.rows[0])
    }
}

module.exports = new PersonController()