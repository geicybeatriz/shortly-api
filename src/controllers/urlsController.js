import {nanoid} from "nanoid";
import db from "../../database/db.js";

export async function createUrlShorten(req, res){
    const {user} = res.locals;
    const {url} = req.body;
    const shortUrl = nanoid(8);
    
    try {
        await db.query(`
            INSERT INTO urls (url, "shortUrl", "userId") 
            VALUES ($1, $2, $3);`,
            [url, shortUrl, user?.id]);

        res.status(201).send({shortUrl});
    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
}

export async function getUrlById(req, res){
    const {id} = req.params;
    
    try {
        const urlsList = await db.query(`
            SELECT id, "shortUrl", url 
            FROM urls 
            WHERE id=$1;`, [id]);
        console.log("urls",urlsList);
        const url = urlsList.rows[0];
        if(urlsList.rowCount === 0) return res.status(404).send("url não encontrada!");

        res.status(200).send(url);
        
    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
}




