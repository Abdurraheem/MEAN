var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    firstname   : {type: String, required: false},
    lastname    : {type: String, required: false},
    email       : {type: String, required: true}
});

module.exports = mongoose.model('user', User);

// User.find({ name: 'John Doe' }, function(err, user) {
//     if (err) throw err;
  
//     // object of the user
//     console.log(user);
//   });

  function userInsert(data,cb){
     
    User.insert(data,function(err,res){
        if(err) return err;
        return cb(response);
    })

  }
  