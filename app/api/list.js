// load up the user model
var Item       = require('../../app/models/item.js');

exports.saveItem = function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    var completed = req.body.completed;

    var item = new Item({
        title : title,
        description : description,
        completed : completed
    });

    item.save(function(err, result){
        if (!err) {
            return res.json(result);
        }
        else{
            return res.json(err);
        }
    });
};


exports.getList = function(req, res) {
    Item.find({}, function (err, results){
        res.json(results);
    });
};