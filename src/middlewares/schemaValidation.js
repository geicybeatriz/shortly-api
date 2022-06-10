export default function validateSchema(schema){
    return (req, res, next) => {
        const validate = schema.validate(req.body, {abortEarly: false});
        if(validate.error){
            return res.status(422).send(validate.error.details[0].message);
        }

    next();
    }
}