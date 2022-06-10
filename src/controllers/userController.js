import db from "./../../database/db.js";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";


export async function addUser(req, res){
    const {name, email, password, confirmPassword} = req.body;
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

export async function signIn(req, res){
    const {email, password} = req.body;

    try {
        const checkUser = await db.query(`
        SELECT * 
        FROM users 
        WHERE email=$1;`, [email]);

        if(checkUser.rows.length !== 0 && bcrypt.compareSync(password, checkUser.rows[0].password)){
            const token = uuidv4();
            await db.query(`
                INSERT INTO sessions (token, "userId") 
                VALUES ($1, $2);`, 
                [token, checkUser.rows[0].id]);
                
            return res.status(200).send(token);
        }else {
            res.status(404).send("usuário não encontrado");
        }
        
    } catch (error) {
        console.log("erro", error);
        res.status(500).send("erro ao fazer login");
    }
}

