
var mongoose =require('mongoose');

var User = mongoose.model('User',{
    email:{
      type:String,
      required:true,
      minlength:1,
      trim:true
    }
  })
  
//   var user = new User({
//     email:'    abc@gmail.com            '
//   });
  
//   user.save().then(doc=>{
//     console.log("User saved",doc);  
//   },err=>{
//       console.log("Unable to save user",err);  
//   })

  module.exports={User}