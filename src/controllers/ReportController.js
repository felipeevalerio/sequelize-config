const User = require('../models/User');
const {Op } = require('sequelize')
module.exports = {
    show(req,res){
        const users = User.findAll({
            attributes:["name","email"],
            where:{
                email:{
                    [Op.iLike]:"%@outlook.com"
                }
            },
            include:[
                {association: "addresses", where:{street:"Rua Siqueira Campos"}},
                {
                    required:false,
                    association: "techs", 
                    where:{
                        name: {
                            [Op.iLike]:"React%"
                        }
                    }
                }
            ]
        })

        return res.json(users);
    }
}