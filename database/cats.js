var mongoose = require("mongoose");
 
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });


var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});
var Cat = mongoose.model("Cat", catSchema);
// var george = new Cat({
//     name: "mrs.helly",
//     age: 1,
//     temperament: "good"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});