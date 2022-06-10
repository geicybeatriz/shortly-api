import urlSchema from "../schemas/urlSchema.js";

export function validateSchema(req, res, next){
    const validate = urlSchema.validate(req.body, {abortEarly: false});
    if(validate.error){
        return res.status(422).send(validate.error.details[0].message);
    }

    next();
}