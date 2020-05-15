var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/blog_demo");
 mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

//user - email -name

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


	
User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort.  Voldemort. Voldemort"
        });
        user.save(function(err, user){
            if(err){
              //  console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});
	