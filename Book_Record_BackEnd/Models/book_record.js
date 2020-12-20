var db=require('../dbConnection');

var Book={
    getAllBookAddByName: function(id, callback){
        return db.query('select * from book_record where name=?',[id], callback);
    },

    getAllBook:function(callback){
        return db.query('select * from book_record',callback);
    },
    


    addBook:function(object, callback){
        return db.query('insert into book_record values(?,?,?,?)',
        [object.name, object.writer, object.pages, object.price],callback);
    },

    deleteBook:function(name, callback){
        return db.query('delete from book_record where name=?',[name],callback);
    },

    editBook:function(object,name, callback){
        return db.query('update book_record set name=?, writer=?, pages=?, price=? where name=?',
        [object.name, object.writer, object.pages, object.price, name],callback);
    }
};
module.exports=Book;