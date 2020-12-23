var connection = require('../dbconfig/databaseconfig')

module.exports = {
    getAllUsers: (callBack)=>{
        var sql = "select * from user_details"
        connection.query(sql, (error, results)=>{
            if(error)
                callBack(error)

            console.log(results)
            return  callBack(results)   
        })
    },
    getUserById: (id, callBack)=>{
        var sql = "select ud.user_id,ud.user_name,md.message_details from user_details ud join message_details md on ud.user_id = md.user_id where ud.user_id = ?"
        connection.query(sql, [id], (error, results)=>{
            if(error)
                callBack(error)
            return callBack(results)    
        })
    },
    postMessageById: (id, message, callBack)=>{
        var sql = "INSERT INTO message_details (`message_details`, `user_id`) VALUES (?, ?);"
        connection.query(sql, [message, id], (error, results)=>{
        console.log(results)

            if(error)
                callBack(error)
            return callBack(results)    
        })
    },
    putMessageById: (id, message, callBack)=>{
        var sql = "update message_details set message_details=? where message_id= ?"
        connection.query(sql, [message, id], (error, results)=>{
        console.log(results)

            if(error)
                callBack(error)
            return callBack(results)    
        })
    },
}