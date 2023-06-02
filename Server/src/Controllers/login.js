const {User} = require("../DB_connection");

const login = async (req, res)=> {
    try {
        const {email, password} = req.query;
        if(!email || !password) return res.status(400).send("Faltan datos")
        
        const newUser = await User.findOne({where:{email}})
        if(!newUser) return res.status(404).send("Usuario no encontrado")

        return newUser.password === password 
        ? res.json({access: true})
        : res.statur(403).send("Contraseña incorrecta")
    } catch (error) {
        return res.statur(500).send(error.message)
    }
    // const userFound = users.find((users)=> users.email === email && users.password === password)

    // userFound 
    // ? res.status(200).json({access: true}) 
    // : res.status(404).json({access:false})
};

module.exports = login;