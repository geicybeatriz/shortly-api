import db from "../../database/db.js";

export async function getRanking(req, res){
    try {
        const result = await db.query(`
            SELECT users.id, users.name, COUNT(urls.url) AS "linksCount", SUM(urls.views) AS "visitCount"
            FROM users
            JOIN urls ON urls."userId"= users.id
            GROUP BY users.id
            ORDER BY "visitCount" DESC
            LIMIT 10;`);
        
        res.status(200).send(result.rows);
    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
}