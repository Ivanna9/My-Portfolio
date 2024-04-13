  const db = require('../db')
  
  class PersonController {
  
    async createPerson (req,res) {
        const {person_name,password,person_role,department,date_registered,active,email,phone_number} = req.body
        const newPerson = await db.query ('INSERT INTO person (person_name,password,person_role,department,date_registered,active,email, phone_number) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[person_name,password,person_role,department,date_registered,active,email,phone_number])
        res.json(newPerson.rows[0]) 
    }

    async getPerson(req,res) {
      const person = await db.query('SELECT * FROM person ')
      res.json(person.rows);
    }

    async getOnePerson (req,res) {
      const person_id = req.params.person_id
      const person = await db.query('SELECT * FROM person where person_id = $1' , [person_id])
      res.json(person.rows[0])
    }

    async updatePerson (req,res) {

    }

    async deletePerson (req,res) {

    }
}

module.exports = new PersonController()