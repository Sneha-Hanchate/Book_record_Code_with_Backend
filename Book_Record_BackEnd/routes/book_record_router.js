var express =require('express');
var router =express.Router();
var Book =require('../Models/book_record');


router.get('/:name?', function(req,res, next){

    if(req.params.name){
        Book.getAllBookAddByName(req.params.name, function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        Book.getAllBook(function(err, rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }); 
}

});

// router.get('/', function(req,res, next){

//             Book.getAllBook(function(err, rows){
//             if(err){
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//         }); 
//     });


router.post('/', function(req,res,next){
    Book.addBook(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:name', function(req,res,next){
    Book.deleteBook(req.params.name, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:name', function(req,res,next){
    Book.editBook(req.body,req.params.name, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;