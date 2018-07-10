const express = require('express');
const router = express.Router();
const users = require('./../../modals/users'); 

router.get('/users',(req,res)=>{
    var data = {firstname : 'ABU',lastname:'Hamza',email:'hamza@abu.com'}
    users.userInsert(data).then(function(res){
        console.log('======Inside===========')
        console.log(res);
    });

    console.log('API call has been detected...');
   res.send('You are intitled');
});

// Get users
// router.get('/users', (req, res) => {
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

module.exports = router;