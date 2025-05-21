const validateUser = (req, res, next) => {
    const {name, email} = req.body;

    if(neme || !email) {
        return res.status(400).json({error: 'Name and email are requierd'});
    }

    next(); // Pass to controller
}

export default validateUser;