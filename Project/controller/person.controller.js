  const db = require('../db')
  
  class PersonController {
  
    async createPerson (req,res) {
        const {person_name,password,person_role,department,date_registered,active,email,phone_number} = req.body
        const newPerson = await db.query ('INSERT INTO person (person_name,password,person_role,department,date_registered,active,email, phone_number) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[person_name,password,person_role,department,date_registered,active,email,phone_number])
        res.json(newPerson) 
    }

    async getPerson(req,res) {

    }

    async getOnePerson (req,res) {

    }

    async updatePerson (req,res) {

    }

    async deletePerson (req,res) {

    }
}

module.exports = new PersonController()