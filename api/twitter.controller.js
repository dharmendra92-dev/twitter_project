var {
    getAllUsers, 
    getUserById,
    postMessageById,
    putMessageById
} = require('./twitter.services')

module.exports = {
getAllUsersController: (req, res)=>{
    getAllUsers((error, results)=>{
        if(error){
            console.log(error)
            return
        }
           console.log(results) 
        return res.json({
            success:1,
            data: results
        })    
    })
},
getUserByIdController: (req, res)=>{
    var id=req.params.id
    getUserById(id, (error, results)=>{
        if(error){
            console.log(error)
            return
        }
        return res.json({
            success:1,
            data: results
        })     
    })
},
postMessageByIdController: (req, res)=>{
    var id=req.params.id
    var message=req.params.message
    
    postMessageById(id, message, (error, results)=>{
        if(error){
            console.log(error)
            return
        }
        return res.json({
            success:1,
            data: results
        })     
    })
},
putMessageByIdController: (req, res)=>{
    var id=req.params.id
    var message=req.params.message
    
    putMessageById(id, message, (error, results)=>{
        if(error){
            console.log(error)
            return
        }
        return res.json({
            success:1,
            data: results
        })     
    })
}
}    