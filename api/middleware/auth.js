const jwt = require("jsonwebtoken");

module.exports = (req,res, next)=>{
    try{
        let token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decoded
        next()
    }
    catch(err){
        console.log(res)
        return res.status(401).json({
            message:"Auth failed"
        })
    }
    

};