import Joi from "joi";

const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirm_password: Joi.ref('password')
});

const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export async function signUpValidate(req, res, next){
    if(req.body.password !== req.body.confirm_password){
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