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

module.exports = {
    validateBody
}