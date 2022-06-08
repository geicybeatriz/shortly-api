import db from "./../../database/db.js";
import * as bcrypt from "bcrypt";

export async function addUser(req, res){
    const {name, email, password, confirm_password} = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        const checkUser = await db.query(`
        SELECT * 
        FROM users 
        WHERE email=$1`, [email]);
        if(checkUser.rows.length !== 0){
            return res.status(409).send("Este usuário já está cadastrado");
        }

        await db.query(`
            INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3);`, 
            [name, email, passwordHash]);

        res.status(201).send("cadastro realizado com sucesso");
    } catch (error) {
        console.log("erro", error);
        res.status(500).send("erro ao cadastrar cliente");
    }
}

