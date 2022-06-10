import signInSchema from "../schemas/signInSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";

export async function signUpValidate(req, res, next){
    if(req.body.password !== req.body.confirmPassword){
        return res.status(422).send("as senhas devem ser iguais");
    }

    const validate = signUpSchema.validate(req.body, {abortEarly: false});
    if(validate.error){
        return res.status(422).send(validate.error.details[0].message);
    }

    next();
}

export async function signInValidate(req, res, next){
    const validate = signInSchema.validate(req.body,{abortEarly: false});

    if(validate.error){
        return res.status(422).send(validate.error.details[0].message);
    }

    next();
}