const {User} = require("../DB_connection");

module.exports = async (req, res) => {
    try {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).send("Faltan datos") 
  
    const newUSer = await User.findOrCreate( {where: {email, password,}})
    return res.status(200).json(newUSer)

 } catch (error) {
    return res.status(500).json(error.message)
 };
};



// const postUser = async (req, res) => {
//     const {email, password} = req.body;
//     if(!email|| !password) return res.status(400).send("Faltan datos");

//     const newUSer = await User.findOrCreate( {where: {email, password,}})

//     return newUSer
// };

// module.exports = {
//     postUser
// };