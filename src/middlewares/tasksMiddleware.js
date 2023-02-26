const validateBody = (req, res, next) => {
    const {body} = req

    if(body.title === undefined){
        return res.status(400).json({message: 'O titulo é obrigatório'})
    }

    if(body.title === ''){
        return res.status(400).json({message: 'O titulo precisa ser preenchido'})
    }

    next();
};

const validateUpdateBody = (req, res, next) => {
    const {body} = req

    if(body.title === undefined || body.status === undefined){
        return res.status(400).json({message: 'Precisa preencher titulo & status'})
    }

    if(body.status === null || body.status === null){
        return res.status(400).json({message: 'Precisa preencher titulo status'})
    }

    next();
};

module.exports = {
    validateBody,
    validateUpdateBody
}