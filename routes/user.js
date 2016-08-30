var express = require('express');
var models = require('../models');
var util = require('../util');
var router = express.Router();
router.use('/login',function(req,res){
    var user = req.body;
    models.User.findOne({email:user.email},function(err,doc){
        if(err){
            res.statusCode(500).send('µÇÂ½Ê§°Ü');
        }else{
            if(doc){
                req.session.user = doc;
                res.send(doc);
            }else{
                user.avatar="http://s.gravatar.com/avatar/c1851b38046bf0e21c72dbfa357f8ffa?s=48";
                models.User.create(user,function(err,user){
                    req.session.user = user;
                    res.send(user);
                })
            }
        }
    })
});
module.exports = router;