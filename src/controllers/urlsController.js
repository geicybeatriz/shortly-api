import {nanoid} from "nanoid";
import db from "../../database/db.js";

export async function createUrlShorten(req, res){
    const {user} = res.locals;
    const {url} = req.body;
    const shortURL = nanoid(8);
    console.log(shortURL);

    try {
        await db.query(`
            INSERT INTO urls (url, "shortUrl", "userId") 
            VALUES ($1, $2, $3);`,
            [url, shortURL, user?.id]);

        res.status(201).send({shortURL});
    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
}

