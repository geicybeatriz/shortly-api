import db from "../../database/db.js";

export async function tokenValidate(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token) return res.sendStatus(401);

    try {
        
        const checkSessions = await db.query(`SELECT * FROM sessions WHERE token=$1;`, [token]);
        const session = checkSessions.rows[0];
        if(!session) return res.sendStatus(401);

        const checkUser = await db.query(`SELECT * FROM users WHERE id=$1;`, [session.userId]);
        const user = checkUser.rows[0];
        if(!user) return res.sendStatus(401);

        res.locals.user = user;
        next();

    } catch (error) {
        console.log("erro", error);
        res.sendStatus(500);
    }
    
}