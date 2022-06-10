import db from "../../database/db.js";

export async function getUsers(req, res){
    const {id} = req.params;

    try {
        const result = await db.query(`
            SELECT users.id, users.name, SUM(views) as "visitCount"
            FROM users
            JOIN urls ON users.id = urls."userId"
            WHERE "userId"= $1
            GROUP BY urls."userId", users.name, users.id;`, [id]
        );
        if(result.rowCount === 0) return res.status(404).send("dados de usuário não encontrados.");

        const urlsList = await db.query(`
            SELECT urls.id, urls."shortUrl", urls.url, urls.views AS "visitCount"
            FROM urls
            WHERE "userId"=$1
        ;`, [id]);
        if(urlsList.rowCount === 0) return res.status(404).send("lista de urls do usuário não encontrada!");

        const userData = result.rows[0];
        const userUrls = urlsList.rows;
        const response = {...userData, shortenedUrls: [...userUrls]};

        res.status(200).send(response);
        
    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
}