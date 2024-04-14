const db = require('../db')

class PostController{

    async createPost (req,res){
        const{ title, content, person_id}= req.body
        const newPost = await db.query('INSERT INTO post (title, content, person_id) values ($1, $2, $3) RETURNING *', [title, content, person_id])
        res.json(newPost.row[0])
    }

    async getPostsByPerson (req,res){
        const id = req.query.id
        const posts = await db.query('SELECT * FROM post where person_id= $1', [id])
        res.json(posts.rows)
    }
    //для свого переробити та пропестить с 16 мин примерно
}

module.exports = new PostController()