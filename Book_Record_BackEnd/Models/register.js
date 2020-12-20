var db=require('../dbConnection');

var Reg={
    

    getAllReg:function(callback){
        return db.query('select * from register',callback);
    },
    


    addReg:function(object, callback){
        return db.query('insert into register values(?,?,?,?)',
        [object.name, object.email, object.gender, object.password],callback);
    },

    deleteReg:function(name, callback){
        return db.query('delete from register where name=?',[name],callback);
    },

    
};
module.exports=Reg;