var express =require('express');
var router =express.Router();
var Reg =require('../Models/register');


// router.get('/:name?', function(req,res, next){

//     if(req.params.name){
//         Reg.getAllRegAddByName(req.params.name, function(err,rows){
//             if(err){
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//         })
//     }
//     else{
//         Reg.getAllReg(function(err, rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     }); 
// }

// });

router.get('/', function(req,res, next){

            Reg.getAllReg(function(err, rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        }); 
    });


router.post('/', function(req,res,next){
    Reg.addReg(req.body, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:name', function(req,res,next){
    Reg.deleteReg(req.params.name, function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


// router.put('/:name', function(req,res,next){
//     Reg.editReg(req.body,req.params.name, function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });
// });
module.exports=router;